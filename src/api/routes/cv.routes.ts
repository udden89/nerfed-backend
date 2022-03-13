import express, { Request, Response } from "express"
import cvController from "../controller/cv.controller"
import { IWorkExperience } from "../models_DTOs_interfaces/CV/WorkExperienceInterface"
import { authorization } from "../../middleware/authorization"
import { verifyJWTToken } from "../services/auth_services/jwt"
import { PublicWorkExperience } from "../models_DTOs_interfaces/CV/WorkExperienceDTO"

export const cvRoutes = express.Router()

//GET
cvRoutes.get("/work-experience", async (req: Request, res: Response) => {

  if (verifyJWTToken(req.cookies.access_token)) {
    const listOfWorkExperience: Array<IWorkExperience> = await cvController.getListOfFullWorkExperiences()
    res.status(200).json({ listOfWorkExperience })
  } else {
    const listOfWorkExperience: Array<PublicWorkExperience> = await cvController.getPublicWorkExperiences()
    res.status(200).json({ listOfWorkExperience })
  }

})

//POST
cvRoutes.post("/work-experience", authorization, async (req: Request, res: Response) => {
  const workExperience: IWorkExperience = await cvController.addNewWorkExperience(req, res)
  res.status(200).json({ workExperience })
})