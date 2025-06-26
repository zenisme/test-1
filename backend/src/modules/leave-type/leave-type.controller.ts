import { Request, Response } from 'express';
import { ILeaveTypeService, LeaveTypeService } from './leave-type.service';
import { baseResponse } from '../../common';

export class LeaveTypeController {
    constructor(private readonly leaveTypeService: ILeaveTypeService) {
    }

    public async getAllLeaveTypes(req: Request, res: Response) {
        try {
            const leaveTypes = await this.leaveTypeService.findAll();
            res.status(200).json(baseResponse(leaveTypes, 'Leave types retrieved successfully', 200));
        } catch (err) {
            console.log(err);
            res.status(500).json(baseResponse(null, 'Internal server error', 500));
        }
    }
} 