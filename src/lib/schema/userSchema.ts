import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),  
  email: z.string().email("Invalid email address"),  
  age: z.number().int().positive(),  
  isActive: z.boolean().default(true),  
  createdAt: z.date().default(new Date())  
});

export const updateUserSchema = z.object({
  id: z.string().cuid(),  
  name: z.string().min(1).optional(),  
  email: z.string().email().optional(),  
  age: z.number().int().positive().optional(),  
  isActive: z.boolean().optional(),  
  createdAt: z.date().optional()  
});

export const deleteUserSchema = z.object({
    id: z.string().cuid().optional()  
  });


export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
