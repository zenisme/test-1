import { Router } from 'express';
import { LeaveController } from './leave-application.controller';
import { LeaveApplicationService } from './leave-application.service';
import { UserService } from '../user/user.service';
import { EmployeeService } from '../employee/employee.service';
import { permissionMiddleware } from '../../common/middleware';
import { LeaveBalanceService } from '../leave-balance/leave-balance.service';
import { LeaveTypeService } from '../leave-type/leave-type.service';

const router = Router();

const leaveApplicationService = new LeaveApplicationService()
const userService = new UserService()
const employeeService = new EmployeeService()
const leaveBalanceService = new LeaveBalanceService()
const leaveTypeService = new LeaveTypeService()

const leaveController = new LeaveController(leaveApplicationService, userService, employeeService, leaveBalanceService, leaveTypeService)

router.get('/', leaveController.getAllLeaves.bind(leaveController))
router.post('/', leaveController.createLeave.bind(leaveController))
router.patch('/:id', permissionMiddleware('manager') as any, leaveController.updateLeave.bind(leaveController))
router.delete('/:id', permissionMiddleware('employee') as any, leaveController.deleteLeave.bind(leaveController))

export const LeaveApplicationRoutes = router; 