import  express  from "express";
import employeesRouter from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeesRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint not found'
    })
})
export default app;