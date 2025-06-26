import { ILeaveApplication, LeaveBalance } from "../leave-application/leave-application.interface";
import { IUser } from "../user/user.interface";

export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    dateJoined: Date;
    status: string;
    userId?: number;
  
    user?: IUser;
    leaves?: ILeaveApplication[];
    leaveBalances?: LeaveBalance[];
    approvedLeaves?: ILeaveApplication[];
  }

export enum EmployeePermission {
    CREATE = 'create-employee',
    READ = 'read-employee',
    UPDATE = 'update-employee',
    DELETE = 'delete-employee'
}


