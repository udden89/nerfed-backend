import { Request, Response } from 'express'
import User from '../model/user/user'

const create = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.create({
    email,
    password
  })

  res.json({
    user,
    message: "create user successfully"
  })
}

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await User.findOne({
    email
  })

  if (!user) {
    throw Error("User not found")
  }
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h"
    })

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

module.exports = {
  create,
  login,
}