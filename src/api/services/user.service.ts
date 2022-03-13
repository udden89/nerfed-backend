import { Request, Response } from 'express'
import { comparePassword } from "./auth_services/bcrypt"
import User from "../models_DTOs_interfaces/user/user"
import { IUser, IUserClient } from "../models_DTOs_interfaces/user/UserInterfaces"
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
  findUser,
}

