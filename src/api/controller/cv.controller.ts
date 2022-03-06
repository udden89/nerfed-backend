import { Request, Response } from 'express'
import cvService from '../services/cv.service'

const addNewWorkExperience = async (req: Request, res: Response) => {
  const workExperience = await cvService.addNewWorkExperience(req.body)
  return workExperience
}

const getAllWorkExperiences = async () => {
  console.log("getAllWorkExperiences was called")

  const workExperienceList = await cvService.getAllWorkExperiences()
  return workExperienceList
}


export default {
  addNewWorkExperience,
  getAllWorkExperiences
}