import { Request, Response } from 'express'
import { comparePassword } from "./auth_services/bcrypt"
import User from "../model/user/user"
import { IUser, IUserClient } from "../model/user/UserInterfaces"

const registerUser = async (username: string, email: string, password: string) => {
  const user = await User.create({
    username,
    email,
    password
  }).catch((error) => {
    return new Error(error)
  })
  return user
}

const login = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const user = await findUser(username, email)

  if (!user || !comparePW(password, user.password)) return -1

  return req.body.user = user
}


const findUser = async (username: string, email: string): Promise<IUser | null> => {
  const user = await User.findOne({
    $or:
      [
        { username },
        { email }
      ]
  })
  return user
}

const comparePW = async (password: string, hashPW: string) => {
  return comparePassword(password, hashPW)
}

export default {

  registerUser,
  login,

}