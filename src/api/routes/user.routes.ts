import express, { Request, Response } from "express"


export const userRoutes = express.Router()


userRoutes.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Home")
})