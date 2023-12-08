/* eslint-disable quotes */
import express, { Request, Response } from "express"
import { logger } from "./utils/logger"
import middlewares from "./middlewares"
import routes from "./routes"

import cors from "cors"
const app: express.Application = express()
app.use(cors())
middlewares(app) // bind middlewares

routes(app) // initialize all routes

// Base route to health check
app.get("/health", (req: Request, res: Response) => {
    return res.status(200).send("healthy")
})

// Handle invalid Route
app.all("/*", (req: Request, res: Response) => {
    logger.info(__filename, "Invalid Route Handler", "No UUID", "Invalid Route Fired : " + req.path, {})
    return res.status(400).json({
        status: 400,
        message: "Bad Request",
    })
})

export default app
