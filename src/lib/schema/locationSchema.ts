import { z } from 'zod';

// Common fields schema
const locationFieldsSchema = {
	street: z.string().min(2, 'Street is required'),
	city: z.string().min(2, 'City is required'),
	state: z.string().min(2, 'State is required'),
	zip: z
		.string()
		.regex(/^\d+$/, 'ZIP code must contain only numbers')
		.min(5, 'ZIP code must be at least 5 digits long')
		.max(5, 'ZIP code must have 5 digits maximum'),
	country: z.string().min(2, 'Country is required'),
	directorId: z.string().min(1, 'User is required')
};

// Create Location Schema
export const createLocationSchema = z.object(locationFieldsSchema);

// Update Location Schema
export const updateLocationSchema = z.object({
	id: z.string().min(1).optional(),
	...z.object(locationFieldsSchema).partial().shape
});

// Delete Location Schema
export const deleteLocationSchema = z.object({
	id: z.string().min(1, 'ID is required').optional()
});

export type CreateLocationInput = z.infer<typeof createLocationSchema>;
export type UpdateLocationInput = z.infer<typeof updateLocationSchema>;
export type DeleteLocationInput = z.infer<typeof deleteLocationSchema>;
