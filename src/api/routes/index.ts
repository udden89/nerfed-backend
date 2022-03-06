import express, { Request, Response, Application } from "express"
import { authorization } from "../../middleware/authorization"
import { authRoutes } from "./authentication.routes"
import { cvRoutes } from "./cv.routes"
import { userRoutes } from "./user.routes"


const router = express.Router()

/* router.use("/") */
router.use("/cv", cvRoutes)
router.use("/user", userRoutes)
router.use("/auth", authRoutes)


export = router