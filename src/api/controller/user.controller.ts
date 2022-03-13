import { Request, Response } from 'express'
import { comparePassword } from '../services/auth_services/bcrypt'
import { createJWTToken, verifyJWTToken } from '../services/auth_services/jwt'
import User from '../models_DTOs_interfaces/user/user'
import * as IUser from '../models_DTOs_interfaces/user/UserInterfaces'
import userService from '../services/user.service'

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const user = await userService.registerUser(username, email, password)
  res.status(200).json({ user })
}

const login = async (req: Request, res: Response) => {

  try {
    const { username, password, email } = req.body
    const user = await userService.login(username, email, password)

    res.cookie(
      "access_token",
      createJWTToken(user), {
      httpOnly: true,
    })
      .status(200)
      .json({
        user,
        message: "Logged in successfully"
      })
  } catch (error) {
    res.status(400).json()
  }
}

const whoAmI = async (req: Request, res: Response) => {
  console.log(req.cookies)

  try {
    const user = verifyJWTToken(req.cookies.access_token)
    return user
  } catch (error) {
    console.log(error)

  }



  /* try {

    const user = await userService.findUser(req.cookies.access_token)
    console.log("WHOAM I USER: ", user)
    return await user
  } catch (error) {

  } */
}

export = {
  registerUser,
  login,
  whoAmI
}