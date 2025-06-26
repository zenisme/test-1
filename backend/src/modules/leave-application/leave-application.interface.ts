import { IEmployee } from "../employee/employee.interface";

export interface ILeaveType {
  id: number;
  typeName: string;
  description?: string;
  annualQuota: number;
  applications?: ILeaveApplication[];
  balances?: LeaveBalance[];
}

export interface ILeaveApplication {
  id: number;
  employeeId: number;
  leaveTypeId: number;
  startDate: Date;
  endDate: Date;
  reason?: string;
  status: LeaveApplicationStatus; // e.g., "Pending", "Approved", "Rejected"
  appliedDate: Date;
  approvedById?: number;
  decisionDate?: Date;

  employee?: IEmployee;
  leaveType?: ILeaveType;
  approvedBy?: IEmployee;
}

export enum LeaveApplicationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface LeaveBalance {
  id: number;
  employeeId: number;
  leaveTypeId: number;
  year: number;
  totalAllocated: number;
  totalUsed: number;
  totalRemaining: number;

  employee?: IEmployee;
  leaveType?: ILeaveType;
}



export enum LeaveApplicationPermission {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  APPROVE = 'approve',
  REJECT = 'reject',
  CANCEL = 'cancel',
  VIEW = 'view',
  EDIT = 'edit',
}