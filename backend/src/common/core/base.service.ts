import { PrismaClient } from "../../generated/prisma/client";



export class BaseService {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }
}



