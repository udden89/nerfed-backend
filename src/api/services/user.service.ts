import { Request, Response } from 'express'
import { comparePassword } from "./auth_services/bcrypt"
import User from "../model/user/user"
import { IUser, IUserClient } from "../model/user/UserInterfaces"
import { createJWTToken } from './auth_services/jwt'

const registerUser = async (username: string, email: string, password: string) => {
  const user = await User.create({
    username,
    email,
    password
  })

  return user
}

const login = async (username: string, email: string, password: string): Promise<IUser> => {

  const user = await findUser(username, email)
  if (!user || !comparePassword(password, user.password)) throw new Error("Wrong username or password")

  addTokenToUser(user)
  saveUser(user)

  return user
}

const findUser = async (username: string, email: string): Promise<IUser> => {
  const user = await User.findOne({
    $or:
      [
        { username },
        { email }
      ]
  })
  return user
}

const saveUser = async (user: IUser) => {
  await User.updateOne({ _id: user._id }, user)
}

export default {

  registerUser,
  login,
  findUser

}

/* -------------- HELPERS ------------------------------ */


const addTokenToUser = (user: IUser): IUser => {
  const token = createJWTToken(user)
  user.tokens.push(token)
  return user
}
