import { z } from 'zod';
export const createLeaveBalanceSchema = z.object({
  employeeId: z.string(),
  leaveTypeId: z.string(),
  balance: z.number().min(0),
});

export const updateLeaveBalanceSchema = z.object({
  balance: z.number().min(0),
}); 