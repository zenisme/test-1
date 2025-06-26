import { z } from 'zod';

export const createLeaveTypeSchema = z.object({
    typeName: z.string().min(1, 'Type name is required'),
    description: z.string().optional(),
    annualQuota: z.number().int().positive('Annual quota must be a positive integer'),
});

export const updateLeaveTypeSchema = z.object({
    typeName: z.string().min(1, 'Type name is required').optional(),
    description: z.string().optional(),
    annualQuota: z.number().int().positive('Annual quota must be a positive integer').optional(),
}); 