import express, { Request, Response } from "express"
import { authorization } from "../../middleware/authorization"

export const authRoutes = express.Router()

//GET
authRoutes.get("/who-am-i", async (req: Request, res: Response) => {

  console.log("Who-am-i route runned: Cookie:", req.cookies)
  console.log("Who-am-i route runned: Body:", req.body)


  res.status(200).json({})
})

