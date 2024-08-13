import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { createUserSchema } from '$lib/schema/userSchema';
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
  // Initialise le formulaire de création d'utilisateur
  const form = await superValidate(zod(createUserSchema));

  return { form };
};

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    // Valide les données du formulaire
    const form = await superValidate(formData, zod(createUserSchema));

    if (!form.valid) {
      return fail(400, {
        form,
        error: 'Invalid data'
      });
    }

    try {
      // Crée un nouvel utilisateur dans la base de données
      await prisma.user.create({
        data: {
          name: form.data.name,
          email: form.data.email,
          age: form.data.age,
          isActive: form.data.isActive,
          createdAt: form.data.createdAt,
        }
      });

      // Redirige vers une autre page après la création
      throw redirect(303, '/user/success'); // Page de succès ou liste des utilisateurs

    } catch (error) {
      console.error('Error creating user:', error);
      return fail(500, {
        error: 'Failed to create user',
        form
      });
    }
  }
};
