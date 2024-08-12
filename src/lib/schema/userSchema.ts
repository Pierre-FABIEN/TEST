import { z } from 'zod';

// Schéma pour la création d'un utilisateur (Create)
export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),  // Nom requis
  email: z.string().email("Invalid email address"),  // Email valide requis
  age: z.number().int().positive(),  // Âge doit être un entier positif
  isActive: z.boolean().default(true),  // isActive est un booléen, par défaut à true
  createdAt: z.date().default(new Date())  // Date de création, par défaut la date actuelle
});

// Schéma pour la lecture d'un utilisateur (Read)
export const readUserSchema = z.object({
  id: z.string().cuid(),  // ID requis pour la lecture
});

// Schéma pour la mise à jour d'un utilisateur (Update)
export const updateUserSchema = z.object({
  id: z.string().cuid(),  // ID requis pour identifier l'utilisateur à mettre à jour
  name: z.string().min(1).optional(),  // Nom optionnel pour mise à jour
  email: z.string().email().optional(),  // Email optionnel pour mise à jour
  age: z.number().int().positive().optional(),  // Âge optionnel pour mise à jour
  isActive: z.boolean().optional(),  // isActive optionnel pour mise à jour
  createdAt: z.date().optional()  // Date de création optionnelle pour mise à jour
});

// Schéma pour la suppression d'un utilisateur (Delete)
export const deleteUserSchema = z.object({
    id: z.string().cuid().optional()  // Laisser l'ID optionnel initialement
  });

// Export des types dérivés des schémas Zod
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type ReadUserInput = z.infer<typeof readUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
