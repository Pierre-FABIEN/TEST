import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { createUserSchema } from '$lib/schema/userSchema';
import { prisma } from '$lib/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const form = await superValidate(zod(createUserSchema));

	return { form };
};

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		const form = await superValidate(formData, zod(createUserSchema));

		if (!form.valid) {
			return fail(400, {
				form,
				error: 'Invalid data'
			});
		}

		try {
			await prisma.user.create({
				data: {
					name: form.data.name,
					email: form.data.email,
					age: form.data.age,
					isActive: form.data.isActive,
					createdAt: form.data.createdAt
				}
			});

			return message(form, 'User created successfully');
		} catch (error) {
			console.error('Error creating user:', error);
			return fail(500, {
				error: 'Failed to create user',
				form
			});
		}
	}
};
