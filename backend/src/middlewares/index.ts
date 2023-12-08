import express, { Application, NextFunction, Request, Response } from "express"
import fileUpload from "express-fileupload"
import { logger } from "../utils/logger"
import { i18n } from "./i18n"
// import swagger from './swagger'
import uuid from "./uuid"

export default (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ limit: "500mb", extended: true }))
    app.use(i18n.init) // support internationalization
    app.use(fileUpload())

    app.use(underMaintenanceCheck) // check to see if app is under maintenance
    uuid(app) // add uuid in req if not available
    // swagger(app) // bind swagger
    // add all other middleware here
}

const underMaintenanceCheck = (req: Request, res: Response, next: NextFunction) => {
    if (process.env.APP_UNDER_MAINTAINANCE === "true") {
        logger.info(__filename, "", "", req.__("SERVICE_UNAVAILABLE"))
        res.status(503).json({
            status: 503,
            message: req.__("SERVICE_UNAVAILABLE"),
        })
        return
    } else {
        next()
    }
}
