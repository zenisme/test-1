export interface ILeaveBalance {
    id: number;
    employeeId: number;
    leaveTypeId: number;
    year: number;
    totalAllocated: number;
    totalUsed: number;
    totalRemaining: number;
}

export enum LeaveBalancePermission {
    CREATE = 'create-leave-balance',
    READ = 'read-leave-balance',
    UPDATE = 'update-leave-balance',
    DELETE = 'delete-leave-balance'
} 