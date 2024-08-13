import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { createLocationSchema } from '$lib/schema/locationSchema';
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
  const users = await prisma.user.findMany();

  const form = await superValidate(zod(createLocationSchema));

  return { 
    form,
    users
  };
};

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    // Valide les données du formulaire
    const form = await superValidate(formData, zod(createLocationSchema));

    if (!form.valid) {
      return fail(400, {
        form,
        error: 'Invalid data'
      });
    }

    try {
      await prisma.location.create({
        data: {
          street: form.data.street,
          city: form.data.city,
          state: form.data.state,
          zip: form.data.zip,
          country: form.data.country,
          user: {
            connect: { id: form.data.userId }
          }
        }
      });

      return message(form, 'Location created successfully');
    } catch (error) {
      console.error('Error creating location:', error);
      return fail(500, {
        error: 'Failed to create location',
        form
      });
    }
  }
};
