import { Router } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EmployeeService } from '../employee/employee.service';

const router = Router();

const userService = new UserService();
const employeeService = new EmployeeService();
const userController = new UserController(userService, employeeService);



router.post('/login', userController.login.bind(userController));

export const UserRoutes = router; 