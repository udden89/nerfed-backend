import WorkExperience from "../model/CV/WorkExperience"
import { IWorkExperience } from "../model/CV/WorkExperienceInterface"

const addNewWorkExperience = async (body: IWorkExperience) => {
  const workExperience = await WorkExperience.create(body)
  return workExperience
}

const getAllWorkExperiences = async () => {
  const list = await WorkExperience.find()
  return list
}


export default {
  addNewWorkExperience,
  getAllWorkExperiences
}