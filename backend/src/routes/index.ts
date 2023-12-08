import { Application } from "express"
import VerifyRoutes from "../components/verifier/index"
/**
 * Init All routes here
 */
export default (app: Application) => {
    // Public routes

    //Private routes
    app.use("/verify", VerifyRoutes)
}
