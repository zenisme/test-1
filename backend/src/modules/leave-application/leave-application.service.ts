import { BaseService } from "../../common/core/base.service";
import { ILeaveApplication } from "./leave-application.interface";


export interface ILeaveApplicationService {
    getAllLeavesByEmployeeId(employeeId?: number): Promise<ILeaveApplication[]>
    createLeave(data: any): Promise<ILeaveApplication>
    approveLeave(id: number): Promise<ILeaveApplication>
    findById(id: number): Promise<ILeaveApplication>
    deleteLeave(id: number): Promise<void>
    getAllLeaves(excludeEmployeeId?: number): Promise<ILeaveApplication[]>
    deleteAllLeaves(): Promise<void>
    updateLeave(id: number, data: Partial<ILeaveApplication>): Promise<ILeaveApplication>
}

export class LeaveApplicationService extends BaseService implements ILeaveApplicationService {

    public async getAllLeavesByEmployeeId(employeeId?: number) {
        const leaves = await this.prisma.leaveApplication.findMany({
            where: {
                employeeId: employeeId
            },
            include: {
                employee: true,
                leaveType: true
            }
        }) as ILeaveApplication[]
        return leaves
    }

    public async createLeave(data: Partial<ILeaveApplication>) {
        const leave = await this.prisma.leaveApplication.create({ data: data as any }) as ILeaveApplication
        return leave
    }

    public async approveLeave(id: number) {
        const leave = await this.prisma.leaveApplication.update({
            where: { id: id },
            data: { status: 'approved' }
        }) as ILeaveApplication
        return leave
    }

    public async findById(id: number) {
        const leave = await this.prisma.leaveApplication.findUnique({
            where: { id: id }
        }) as ILeaveApplication
        return leave
    }

    public async deleteLeave(id: number) {
        await this.prisma.leaveApplication.delete({
            where: { id: id }
        })
    }

    public async getAllLeaves(excludeEmployeeId?: number) {
        const leaves = await this.prisma.leaveApplication.findMany({
            where: {
                employeeId: {
                    not: excludeEmployeeId
                }
            },
            include: {
                employee: true,
                leaveType: true
            }
        }) as ILeaveApplication[]
        return leaves
    }

    public async deleteAllLeaves() {
        await this.prisma.leaveApplication.deleteMany()
    }

    public async updateLeave(id: number, data: Partial<ILeaveApplication>) {
        const leave = await this.prisma.leaveApplication.update({
            where: { id: id },
            data: data as any
        }) as ILeaveApplication
        return leave
    }
} 