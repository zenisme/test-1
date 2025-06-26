export interface ILeaveType {
    id: number;
    typeName: string;
    description?: string;
    annualQuota: number;
}

export enum LeaveTypePermission {
    CREATE = 'create-leave-type',
    READ = 'read-leave-type',
    UPDATE = 'update-leave-type',
    DELETE = 'delete-leave-type'
} 