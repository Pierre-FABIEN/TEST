import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { updateProductSchema } from '$lib/schema/productsSchema'; // Assurez-vous d'avoir ce schéma
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ params }) => {
	const product = await prisma.product.findUnique({
		where: { id: params.id },
		include: { agence: true } // Inclut l'agence associée si nécessaire
	});

	const agencies = await prisma.agence.findMany();

	if (!product) {
		throw redirect(302, '/products/not-found');
	}

	const updateProduct = await superValidate(product, zod(updateProductSchema));

	return {
		product,
		agencies,
		updateProduct
	};
};

export const actions = {
	update: async ({ request }) => {
		const formData = await request.formData();

		// Récupérer et valider les données du formulaire
		const form = await superValidate(formData, zod(updateProductSchema));

		if (!form.valid) {
			return fail(400, {
				form,
				error: 'Invalid data'
			});
		}

		// Vérifier si l'ID est présent
		const productId = form.data.id;

		if (!productId) {
			return fail(400, {
				form,
				error: 'Product ID is required'
			});
		}

		try {
			// Mise à jour du produit dans la base de données
			await prisma.product.update({
				where: { id: productId },
				data: {
					name: form.data.name,
					stock: form.data.stock,
					price: form.data.price,
					agenceId: form.data.agenceId // Met à jour l'agence associée
				}
			});

			return message(form, 'Product updated successfully');
		} catch (error) {
			console.error('Error updating product:', error);
			return fail(500, {
				error: 'Failed to update product',
				form
			});
		}
	}
};
