import { TodoRepository } from "../repositories/todo.repository";

export class TodoService{
    private todoRepository = new TodoRepository()    

    async getAllTodos(){
        return await this.todoRepository.findAll()
    }

    async createNewTodo(data: {title: string, description?: string, userId: number}){
        return await this.todoRepository.create(data)
    }
}