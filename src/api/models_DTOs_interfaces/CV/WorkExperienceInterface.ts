import { Document } from "mongodb"

export interface IWorkExperience extends Document {
  _id: string
  title: string,
  company: string
  startDate: string | Date
  endDate: string | Date
  type: string
  description: string
}