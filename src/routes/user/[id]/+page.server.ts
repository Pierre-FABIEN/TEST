import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { updateUserSchema } from '$lib/schema/userSchema';
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: { id: params.id }
  });

  if (!user) {
    throw redirect(302, '/user/not-found');
  }

  const updateUser = await superValidate(user, zod(updateUserSchema));

  return { updateUser };
};

export const actions = {
  update: async ({ request }) => {
    const formData = await request.formData();

    const form = await superValidate(formData, zod(updateUserSchema));

    if (!form.valid) {
      return fail(400, {
        form,
        error: 'Invalid data'
      });
    }

    try {
      await prisma.user.update({
        where: { id: form.data.id },
        data: {
          name: form.data.name,
          email: form.data.email,
          age: form.data.age,
          isActive: form.data.isActive
        }
      });

      return message(form, 'User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      return fail(500, {
        error: 'Failed to update user',
        form
      });
    }
  }
};
