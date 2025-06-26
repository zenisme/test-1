import { Request, Response } from 'express';
import { baseResponse } from '../../common';
import { LeaveApplicationService, ILeaveApplicationService } from './leave-application.service';
import { createLeaveSchema, updateLeaveSchema } from './leave-application.validation';
import { IUserService } from '../user/user.service';
import { ILeaveApplication, LeaveApplicationStatus } from './leave-application.interface';
import { EmployeeService } from '../employee/employee.service';
import dayjs from 'dayjs';
import { ILeaveBalanceService } from '../leave-balance/leave-balance.service';
import { ILeaveTypeService } from '../leave-type/leave-type.service';


export class LeaveController {
    constructor(
        private readonly leaveApplicationService: ILeaveApplicationService,
        private readonly userService: IUserService,
        private readonly employeeService: EmployeeService,
        private readonly leaveBalanceService: ILeaveBalanceService,
        private readonly leaveTypeService: ILeaveTypeService
    ) {
    }

    public async getAllLeaves(req: Request, res: Response) {
        try {
            const employee = await this.employeeService.findByUserId(req.body.user.id)
            const leaveApplications = await this.leaveApplicationService.getAllLeavesByEmployeeId(employee?.id)

            if (employee.role === 'manager') {
                const allLeaves = await this.leaveApplicationService.getAllLeaves(employee?.id)
                res.status(200).json(baseResponse(allLeaves, 'Leaves fetched successfully', 200))
                return
            }

            res.status(200).json(baseResponse(leaveApplications, 'Leaves fetched successfully', 200))
        } catch (error) {
            res.status(500).json(baseResponse(null, 'Internal server error', 500))
        }
    }


    public async deleteAllLeaves(req: Request, res: Response) {
        try {
            await this.leaveApplicationService.deleteAllLeaves()
            res.status(200).json(baseResponse(null, 'All leaves deleted successfully', 200))
        } catch (error) {
            res.status(500).json(baseResponse(null, 'Internal server error', 500))
        }
    }
    public async updateLeave(req: Request, res: Response) {
        try {
            const { error } = updateLeaveSchema.safeParse(req.body)
            if (error) {
                res.status(200).json(baseResponse(null, error.message, 400))
                return
            }

            const leaveApplication = await this.leaveApplicationService.findById(Number(req.params.id))
            if (!leaveApplication) {
                res.status(200).json(baseResponse(null, 'Leave application not found', 404))
                return
            }
            const leaveBalance = await this.leaveBalanceService.findByEmployeeId(leaveApplication.employeeId, dayjs(leaveApplication.startDate).year(), leaveApplication.leaveTypeId)
            if (!leaveBalance) {
                res.status(200).json(baseResponse(null, 'Leave balance is not found', 404))
                return
            }
            const diff = dayjs(leaveApplication.endDate).diff(dayjs(leaveApplication.startDate), 'hours') / 24

            if (leaveBalance.totalRemaining < diff) {
                res.status(200).json(baseResponse(null, 'Leave balance is not enough', 400))
                return
            }
            await this.leaveBalanceService.updateLeaveBalance(leaveBalance.id, diff)

            const employee = await this.employeeService.findByUserId(req.body.user.id)
            const updatedLeaveApplication = await this.leaveApplicationService.updateLeave(Number(req.params.id), { status: req.body.status as LeaveApplicationStatus, approvedById: employee?.id })
            res.status(200).json(baseResponse(updatedLeaveApplication, 'Leave application updated successfully', 200))
        } catch (error) {
            res.status(500).json(baseResponse(null, 'Internal server error', 500))
        }
    }

    public async deleteLeave(req: Request, res: Response) {
        try {
            const leaveApplication = await this.leaveApplicationService.findById(Number(req.params.id))
            if (!leaveApplication) {
                res.status(200).json(baseResponse(null, 'Leave application not found', 404))
                return
            }
            await this.leaveApplicationService.deleteLeave(Number(req.params.id))
            res.status(200).json(baseResponse(null, 'Leave application deleted successfully', 200))
        } catch (error) {
            res.status(500).json(baseResponse(null, 'Internal server error', 500))
        }
    }
    public async createLeave(req: Request, res: Response) {
        try {
            const { error } = createLeaveSchema.safeParse(req.body)
            if (error) {
                res.status(200).json(baseResponse(null, error.message, 400))
                return
            }

            const employee = await this.employeeService.findByUserId(req.body.user.id)

            const newLeaveApplication = {
                employeeId: employee?.id,
                status: LeaveApplicationStatus.PENDING,
                appliedDate: new Date(),
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                reason: req.body.reason,
                leaveTypeId: req.body.leaveTypeId
            } as ILeaveApplication

            const leaveType = await this.leaveTypeService.findById(req.body.leaveTypeId)
            if (!leaveType) {
                res.status(200).json(baseResponse(null, 'Leave type not found', 404))
                return
            }
            const diff = dayjs(newLeaveApplication.endDate).diff(dayjs(newLeaveApplication.startDate), 'hours') / 24
            const leaveBalance = await this.leaveBalanceService.findByEmployeeId(employee?.id, dayjs(newLeaveApplication.startDate).year(), req.body.leaveTypeId)
            if (!leaveBalance) {
                res.status(200).json(baseResponse(null, 'Leave balance is not found', 404))
                return
            }
            if (leaveBalance.totalRemaining < diff) {
                res.status(200).json(baseResponse(null, 'Leave balance is not enough', 400))
                return
            }

            const createdLeaveApplication = await this.leaveApplicationService.createLeave(newLeaveApplication)
            res.status(200).json(baseResponse(createdLeaveApplication, 'Leave application created successfully', 200))
        } catch (error) {
            res.status(500).json(baseResponse(null, 'Internal server error', 500))
        }
    }
} 