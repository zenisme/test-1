import { EmployeePermission } from "../../modules/employee/employee.interface"
import { LeaveApplicationPermission } from "../../modules/leave-application/leave-application.interface"
import { UserPermission } from "../../modules/user/user.interface"


export type Role = 'manager' | 'employee'

export const rolePermission: Record<Role, string[]> = {
    manager: [
        UserPermission.CREATE,
        UserPermission.READ,
        UserPermission.UPDATE,
        UserPermission.DELETE,
        EmployeePermission.CREATE,
        EmployeePermission.READ,
        EmployeePermission.UPDATE,
        EmployeePermission.DELETE,
        LeaveApplicationPermission.CREATE,
        LeaveApplicationPermission.READ,
        LeaveApplicationPermission.UPDATE,
    ],
     
    employee: [
        EmployeePermission.CREATE,
        EmployeePermission.READ,
        UserPermission.CREATE,
        UserPermission.READ,
        LeaveApplicationPermission.READ,
        LeaveApplicationPermission.DELETE,
    ]
}


