import { prisma } from '$lib/server';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { deleteUserSchema } from '$lib/schema/userSchema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const users = await prisma.user.findMany();

	// Initialise le formulaire de suppression sans données (vide par défaut)
	const deleteUser = await superValidate(zod(deleteUserSchema));

	return { 
		users,
		deleteUser 
	};
};

export const actions = {
	delete: async ({ request }) => {
	  const formData = await request.formData();
  
	  // Valide le formulaire avec le schéma Zod
	  const form = await superValidate(formData, zod(deleteUserSchema));  // Assure-toi que l'adaptateur zod est utilisé correctement
  
	  if (!form.valid || !form.data.id) {
		return fail(400, {
		  form,
		  error: 'Invalid or missing ID'
		});
	  }
  
	  try {
		// Supprime l'utilisateur de la base de données
		await prisma.user.delete({
		  where: { id: form.data.id }
		});
  
		return message(form, 'User deleted successfully');
		// Redirige ou renvoie un succès après la suppression
		return { success: true };
	  } catch (error) {
		console.error('Error deleting user:', error);
		return fail(500, { error: 'Failed to delete user', form });
	  }
	},
};
