import { z } from 'zod';

export const createLeaveSchema = z.object({
    startDate: z.string().pipe(z.coerce.date()),
    endDate: z.string().pipe(z.coerce.date()),
    reason: z.string(),
    leaveTypeId: z.number(),
});

export const updateLeaveSchema = z.object({
    startDate: z.string().pipe(z.coerce.date()).optional(),
    endDate: z.string().pipe(z.coerce.date()).optional(),
    reason: z.string().optional(),
}); 