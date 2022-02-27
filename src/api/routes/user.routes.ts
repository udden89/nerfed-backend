import express, { Request, Response } from "express"
import userController from '../controller/users'

export const userRoutes = express.Router()


userRoutes.post("/create", async (req: Request, res: Response) => {
  const data = await userController.create(req, res)
  res.status(200).json(data)
})

userRoutes.post("/login", async (req: Request, res: Response) => {
  const data = await userController.login(req, res)
  res.status(200).json(data)
})