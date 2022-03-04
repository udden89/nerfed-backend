import express, { Request, Response } from "express"
import userController from '../controller/user.controller'

export const userRoutes = express.Router()


userRoutes.post("/register", async (req: Request, res: Response) => {
  const data = await userController.registerUser(req, res)
  res.status(200).json(data)
})

userRoutes.post("/login", async (req: Request, res: Response) => {
  const data = await userController.login(req, res)
  res.status(200).json(data)
})