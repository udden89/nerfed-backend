import { Request, Response } from 'express'
import cvService from '../services/cv.service'

const addNewWorkExperience = async (req: Request, res: Response) => {
  const workExperience = await cvService.addNewWorkExperience(req.body)
  return workExperience
}

const getAllWorkExperiences = async () => {
  const workExperienceList = await cvService.getAllWorkExperiences()
  return workExperienceList
}


export default {
  addNewWorkExperience,
  getAllWorkExperiences
}