import express, { Request, Response, Application } from "express"
import { cvRoutes } from "./cv.routes"


const router = express.Router()

/* router.use("/") */
router.use("/cv", cvRoutes)


export = router