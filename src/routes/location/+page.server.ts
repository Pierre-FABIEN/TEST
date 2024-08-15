import { prisma } from '$lib/server';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { deleteLocationSchema } from '$lib/schema/locationSchema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const locations = await prisma.location.findMany({
		include: {
			director: true
		}
	});

	const deleteLocation = await superValidate(zod(deleteLocationSchema));

	return {
		locations,
		deleteLocation
	};
};

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();

		const form = await superValidate(formData, zod(deleteLocationSchema));

		if (!form.valid || !form.data.id) {
			return fail(400, {
				form,
				error: 'Invalid or missing ID'
			});
		}

		try {
			await prisma.location.delete({
				where: { id: form.data.id }
			});

			return message(form, 'Location deleted successfully');
		} catch (error) {
			console.error('Error deleting location:', error);
			return fail(500, { error: 'Failed to delete location', form });
		}
	}
};
