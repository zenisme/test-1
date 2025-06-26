import { Router } from 'express';
import { LeaveBalanceController } from './leave-balance.controller';
import { LeaveBalanceService } from './leave-balance.service';
import { EmployeeService } from '../employee/employee.service';

const router = Router();

const leaveBalanceService = new LeaveBalanceService();
const employeeService = new EmployeeService();
const leaveBalanceController = new LeaveBalanceController(leaveBalanceService, employeeService);

router.get('/', leaveBalanceController.getAllLeaveBalances.bind(leaveBalanceController));

export const LeaveBalanceRoutes = router; 