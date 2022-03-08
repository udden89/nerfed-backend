import { Document } from "mongodb"

export interface IUser extends Document {
  _id: string
  email: string
  username: string
  password: string
  tokens: Array<String>
}

export interface IUserClient extends Document {
  email: string
  username: string
  token: string
}