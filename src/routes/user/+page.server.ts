import { prisma } from '$lib/server';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { deleteUserSchema } from '$lib/schema/userSchema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const users = await prisma.user.findMany({
		include: {
		  locations: true,
		},
	  });

	const deleteUser = await superValidate(zod(deleteUserSchema));

	return { 
		users,
		deleteUser 
	};
};

export const actions = {
	delete: async ({ request }) => {
	  const formData = await request.formData();

	  const form = await superValidate(formData, zod(deleteUserSchema));  // Assure-toi que l'adaptateur zod est utilisé correctement
  
	  if (!form.valid || !form.data.id) {
		return fail(400, {
		  form,
		  error: 'Invalid or missing ID'
		});
	  }
  
	  try {		
		await prisma.user.delete({
		  where: { id: form.data.id }
		});
  
		return message(form, 'User deleted successfully');
	  } catch (error) {
		console.error('Error deleting user:', error);
		return fail(500, { error: 'Failed to delete user', form });
	  }
	},
};
