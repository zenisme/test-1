import { z } from 'zod';

export const createEmployeeSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    position: z.string(),
});

export const updateEmployeeSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    position: z.string().optional(),
}); 