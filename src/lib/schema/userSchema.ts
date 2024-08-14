import { z } from 'zod';

// Common fields schema
const userFieldsSchema = {
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	age: z.number().int().positive('Age must be a positive integer'),
	isActive: z.boolean().default(true),
	createdAt: z.date().default(new Date())
};

// Create User Schema
export const createUserSchema = z.object(userFieldsSchema);

// Update User Schema
export const updateUserSchema = z.object({
	id: z.string().min(1).optional(),
	...z.object(userFieldsSchema).partial().shape
});

// Delete User Schema
export const deleteUserSchema = z.object({
	id: z.string().min(1, 'ID is required').optional()
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
