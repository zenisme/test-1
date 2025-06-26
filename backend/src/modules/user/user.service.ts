import { BaseService } from '../../common/core/base.service'
import { IUser } from './user.interface'



export interface IUserService {
    findById(id: number): Promise<IUser>
    login(email: string, password: string): Promise<IUser>
}

export class UserService extends BaseService implements IUserService {

    public async findById(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        }) as IUser
        return user
    }

    public async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        }) as IUser
     
        return user
    }
} 