import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

const todoService = new TodoService()

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await todoService.getAllTodos()
        return res.status(200).json({
            success: true,
            data: todos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const createTodo = async (req: Request, res: Response) => {
    try {
        const {title, description, userId} = req.body
        const newTodo = await todoService.createNewTodo({
            title,
            description,
            userId: Number(userId)
        })
        return res.status(201).json({
            success: true,
            data: newTodo
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}