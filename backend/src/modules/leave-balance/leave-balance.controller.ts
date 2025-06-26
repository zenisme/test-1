import { Request, Response } from 'express';
import { ILeaveBalanceService, LeaveBalanceService } from './leave-balance.service';
import { baseResponse } from '../../common';
import { IEmployeeService } from '../employee/employee.service';

export class LeaveBalanceController {
    constructor(private readonly leaveBalanceService: ILeaveBalanceService, private readonly employeeService: IEmployeeService) {
    }

    public async getAllLeaveBalances(req: Request, res: Response) {
        try {
            const employee = await this.employeeService.findByUserId(req.body.user.id)
            const leaveBalances = await this.leaveBalanceService.findAll(employee?.id);
            res.status(200).json(baseResponse(leaveBalances, 'Leave balances retrieved successfully', 200));
        } catch (err) {
            console.log(err);
            res.status(500).json(baseResponse(null, 'Internal server error', 500));
        }
    }

   
} 