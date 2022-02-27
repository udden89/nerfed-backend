import express, { Request, Response, Application } from "express"
import { cvRoutes } from "./cv.routes"
import { userRoutes } from "./user.routes"


const router = express.Router()

/* router.use("/") */
router.use("/cv", cvRoutes)
router.use("/user", userRoutes)


export = router