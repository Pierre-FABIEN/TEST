import { z } from 'zod';

// Common fields schema
const locationFieldsSchema = {
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'ZIP code is required'),
    country: z.string().min(1, 'Country is required'),
    userId: z.string().min(1, 'User is required')
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
