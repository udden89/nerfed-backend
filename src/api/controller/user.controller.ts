import { Request, Response } from 'express'
import { comparePassword } from '../../utils/bcrypt'
import createJWTToken from '../../utils/jwt'
import User from '../model/user/user'

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const user = await User.create({
    username,
    email,
    password
  })
  console.log('Created:', user)

  res.json({
    user,
    message: "create user successfully"
  })

}

const login = async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const user = await User.findOne({
    username
  })

  if (!user) {
    throw Error("User not found")
  }
  if (comparePassword(password, user.password)) {

    const token = createJWTToken(user)

    res.json({
      user,
      token,
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