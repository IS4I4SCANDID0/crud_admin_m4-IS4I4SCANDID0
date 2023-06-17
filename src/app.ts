import "express-async-errors"
import express, { Application, json } from 'express'
import userRouters from './routes/user.routes'
import { handleErrors } from './middlewares/handleErrors'
import sessionRouter from "./routes/session.routes"
import coursesRoutes from "./routes/courses.routes"

const app: Application = express()
app.use(json())

app.use("/users", userRouters)
app.use("/login", sessionRouter)
app.use("/courses", coursesRoutes)

app.use(handleErrors);

export default app