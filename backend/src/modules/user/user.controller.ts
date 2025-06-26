import { Request, Response } from 'express';
import { IUserService, UserService } from './user.service';
import { baseResponse } from '../../common';
import { JwtService } from '../../common/jwt';
import { IEmployeeService } from '../employee/employee.service';

export class UserController {
    constructor(private readonly userService: IUserService, private readonly employeeService: IEmployeeService) {
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.userService.login(email, password);
            const employee = await this.employeeService.findByUserId(user.id)
            if (!user) {
                const response = baseResponse(null, 'Invalid email or password', 401);
                res.status(200).json(response);
                return
            }

            const token = JwtService.sign({ id: user.id, role: employee.role })
            res.status(200).json(baseResponse({ user, role: employee.role, token }, 'Login successful', 200));
        } catch (err) {
            console.log(err)
            res.status(500).json(baseResponse(null, 'Internal server error', 500));
        }
    }
} 