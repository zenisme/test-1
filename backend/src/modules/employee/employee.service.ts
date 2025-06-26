import { BaseService } from "../../common/core/base.service";
import { IEmployee } from "./employee.interface";


export interface IEmployeeService {
    findByUserId(userId: number): Promise<IEmployee>
}


export class EmployeeService  extends BaseService implements IEmployeeService  {
    public async findByUserId(userId: number) {
        const employee = await this.prisma.employee.findUnique({
            where: {
                userId: userId
            }
        }) as IEmployee
        return employee
    }
} 