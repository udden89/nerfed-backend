import { Request, Response } from 'express'
import { comparePassword } from '../services/auth_services/bcrypt'
import { createJWTToken } from '../services/auth_services/jwt'
import User from '../model/user/user'
import * as IUser from '../model/user/UserInterfaces'
import userService from '../services/user.service'

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const user = await userService.registerUser(username, email, password)
  res.status(200).json({ user })
}

const login = async (req: Request, res: Response) => {
  const { username, password, email } = req.body

  const user = await userService.login(username, email, password)

  if (!user) {
    res.status(401).json({
      message: "Unauthenticated"
    })
  }

  res.cookie("access_token", user.tokens, {
    httpOnly: true,
  })
    .status(200)
    .json({
      user,
      message: "Logged in successfully"
    })
}

export = {
  registerUser,
  login
}