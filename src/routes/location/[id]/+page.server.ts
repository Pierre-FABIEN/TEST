import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { updateLocationSchema } from '$lib/schema/locationSchema';
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ params }) => {
  const location = await prisma.location.findUnique({
    where: { id: params.id }
  });

  if (!location) {
    throw redirect(302, '/location/not-found');
  }

  const updateLocation = await superValidate(location, zod(updateLocationSchema));

  return { updateLocation };
};

export const actions = {
    update: async ({ request }) => {
      const formData = await request.formData();
  
      const form = await superValidate(formData, zod(updateLocationSchema));
  
      if (!form.valid) {
        return fail(400, {
          form,
          error: 'Invalid data'
        });
      }
  
      try {
        await prisma.location.update({
          where: { id: form.data.id },
          data: {
            street: form.data.street,
            city: form.data.city,
            state: form.data.state,
            zip: form.data.zip,
            country: form.data.country,
            userId: form.data.userId,
          }
        });
  
        return message(form, 'Location updated successfully');
      } catch (error) {
        console.error('Error updating location:', error);
        return fail(500, {
          error: 'Failed to update location',
          form
        });
      }
    }
  };
  