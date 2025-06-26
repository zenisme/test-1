import BaseService from "./base-service";



export default class UserService extends BaseService {
    constructor() {
        super();
    }

    async login(email: string, password: string) {
        return await this.post("/users/login", { email, password });
    }

   
}