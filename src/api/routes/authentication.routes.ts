import express, { Request, Response } from "express"
import { authorization } from "../../middleware/authorization"
import userController from "../controller/user.controller"

userController

export const authRoutes = express.Router()

//GET
authRoutes.get("/who-am-i", async (req: Request, res: Response) => {

  const user = await userController.whoAmI(req, res)

  res.status(200).json(user)
})

