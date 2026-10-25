import express, {type Express, type Request, type Response} from 'express'
import todoRoutes from './features/todos/todo.routes'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    })
})

app.use('/api/todos', todoRoutes)

export default app;