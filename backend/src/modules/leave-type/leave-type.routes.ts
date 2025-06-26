import { Router } from 'express';
import { LeaveTypeController } from './leave-type.controller';
import { LeaveTypeService } from './leave-type.service';

const router = Router();

const leaveTypeService = new LeaveTypeService();
const leaveTypeController = new LeaveTypeController(leaveTypeService);

// GET all leave types
router.get('/', leaveTypeController.getAllLeaveTypes.bind(leaveTypeController));


export const LeaveTypeRoutes = router; 