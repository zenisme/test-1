import BaseService from "./base-service";



export  class LeaveApplicationService  extends BaseService {
    constructor() {
        super();
    }

     async getLeaveApplications() {
        return this.get("/leave-applications");
    }

    async createLeaveApplication(data: any) {
        return this.post("/leave-applications", data);
    }

    async updateLeaveApplication(id: number, data: any) {
        return this.patch(`/leave-applications/${id}`, data);
    }

    async deleteLeaveApplication(id: number) {
        return this.delete(`/leave-applications/${id}`);
    }
}


export  class LeaveTypeService extends BaseService {
    constructor() {
        super();
    }

    async getLeaveTypes() {
        return this.get("/leave-types");
    }
}


export class LeaveBalanceService extends BaseService {
    constructor() {
        super();
    }

    async getLeaveBalances() {
        return this.get("/leave-balances");
    }
}