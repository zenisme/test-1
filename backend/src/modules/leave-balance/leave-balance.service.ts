import { BaseService } from '../../common/core/base.service'
import { ILeaveBalance } from './leave-balance.interface'

export interface ILeaveBalanceService {
    findAll(employeeId?: number): Promise<ILeaveBalance[]>
    updateLeaveBalance(id: number, balance: number): Promise<ILeaveBalance>
    findByEmployeeId(employeeId: number, year: number, leaveTypeId: number): Promise<ILeaveBalance | null>
}

export class LeaveBalanceService extends BaseService implements ILeaveBalanceService {

    public async findAll(employeeId?: number): Promise<ILeaveBalance[]> {
        const leaveBalances = await this.prisma.leaveBalance.findMany({
            where: {
                employeeId
            },
            include: {
                employee: true,
                leaveType: true
            }
        }) as ILeaveBalance[]
        return leaveBalances
    }

    public async updateLeaveBalance(id: number, balance: number) {
        const leaveBalance = await this.prisma.leaveBalance.update({
            where: {
                id
            },
            data: {
                totalRemaining: {
                    decrement: balance
                },
                totalUsed: {
                    increment: balance
                }
            }
        })
        return leaveBalance
    }

    public async findByEmployeeId(employeeId: number, year: number, leaveTypeId: number) {
        const leaveBalance = await this.prisma.leaveBalance.findFirst({
            where: { employeeId, year, leaveTypeId }
        })
        return leaveBalance
    }
} 