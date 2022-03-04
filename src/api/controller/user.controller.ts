import { Request, Response } from 'express'
import { comparePassword } from '../../utils/bcrypt'
import { createJWTToken } from '../../utils/jwt'
import User from '../model/user/user'
import * as IUser from '../model/user/UserInterfaces'

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const user = await User.create({
    username,
    email,
    password
  })

  res.json({
    user,
    message: "create user successfully"
  })

}

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body
  console.log(username, password)

  const user = await User.findOne({
    username
  })

  if (!user) {
    res.status(401).json({
      message: "Unauthenticated"
    })
  }
  if (comparePassword(password, user.password)) {

    const token = createJWTToken(user)

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        user,
        message: "create user successfully"
      })
  } else {
    res.status(401).json({
      message: "Unauthenticated"
    })
  }
}

export = {
  registerUser,
  login
}