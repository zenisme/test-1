import { BaseService } from '../../common/core/base.service'
import { ILeaveType } from './leave-type.interface'

export interface ILeaveTypeService {
    findAll(): Promise<ILeaveType[]>
    findById(id: number): Promise<ILeaveType>
}

export class LeaveTypeService extends BaseService implements ILeaveTypeService {

    public async findAll(): Promise<ILeaveType[]> {
        const leaveTypes = await this.prisma.leaveType.findMany() as ILeaveType[]
        return leaveTypes
    }

    public async findById(id: number): Promise<ILeaveType> {
        const leaveType = await this.prisma.leaveType.findUnique({
            where: {
                id: id
            }
        }) as ILeaveType
        return leaveType
    }
} 