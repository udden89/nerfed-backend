import express, { Request, Response } from "express"
import cvController from "../controller/cv.controller"
import { IWorkExperience } from "../model/CV/WorkExperienceInterface"

export const cvRoutes = express.Router()

cvRoutes.get("/work-experience", async (req: Request, res: Response) => {
  const listOfWorkExperience: Array<IWorkExperience> = await cvController.getAllWorkExperiences()
  res.status(200).json({ listOfWorkExperience })
})

cvRoutes.post("/work-experience", async (req: Request, res: Response) => {
  const workExperience: IWorkExperience = await cvController.addNewWorkExperience(req, res)
  res.status(200).json({ workExperience })
})