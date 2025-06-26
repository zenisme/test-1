import { Router } from 'express';
import { EmployeeController } from './employee.controller';

const router = Router();

// router.get('/', EmployeeController.getAllEmployees);
// router.post('/', EmployeeController.createEmployee);

export const EmployeeRoutes = router; 