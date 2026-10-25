import prisma from "../../../shared/database/db";

export class TodoRepository{
    async findAll(){
        return await prisma.task.findMany()
    }

    async create(data: {title: string, description?: string, userId: number}){
        return await prisma.task.create({ data })
    }
}