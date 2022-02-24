import express, { Request, Response } from "express"


export const cvRoutes = express.Router()


cvRoutes.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Home")
})