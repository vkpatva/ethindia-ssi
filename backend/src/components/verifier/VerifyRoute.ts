import { Request, Response, Router } from "express"
import Controller from "./VerifyController"

const router = Router()

router.get("/govt-auth-qr", (req: Request, res: Response) => {
    Controller.authQR(req, res)
})

router.post("/gov-id", (req: Request, res: Response) => {
    Controller.verifyGovId(req, res)
})

export default router
