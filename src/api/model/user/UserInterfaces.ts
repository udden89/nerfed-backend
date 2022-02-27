import { Document } from "mongodb"

export interface IUser extends Document {
  _id: string
  email: string
  username: string
  hashedPassword: string
}