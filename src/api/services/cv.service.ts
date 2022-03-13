import WorkExperience from "../models_DTOs_interfaces/CV/WorkExperience"
import { PublicWorkExperience } from "../models_DTOs_interfaces/CV/WorkExperienceDTO"
import { IWorkExperience } from "../models_DTOs_interfaces/CV/WorkExperienceInterface"

const addNewWorkExperience = async (body: IWorkExperience) => {
  const workExperience = await WorkExperience.create(body)
  return workExperience
}

const getListOfFullWorkExperiences = async () => {
  const list = await WorkExperience.find()
  return list
}

const getPublicWorkExperiences = async () => {
  const list: IWorkExperience[] = await WorkExperience.find()
  let publicList: PublicWorkExperience[] = []

  list.forEach((ele) => {
    publicList.push(new PublicWorkExperience(ele.title, ele.startDate, ele.endDate, ele.type))
  })

  return publicList
}


export default {
  addNewWorkExperience,
  getAllWorkExperiences: getListOfFullWorkExperiences,
  getPublicWorkExperiences
}