import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"
import { IUser } from '../../models_DTOs_interfaces/user/UserInterfaces'

dotenv.config()

export const createJWTToken = (user: IUser) => {

  const secretKey = process.env.JWT_KEY as string

  const token = jwt.sign({ user }, secretKey, {
    expiresIn: "24h"
  })

  return token
}

export const verifyJWTToken = (token: string) => {
  if (!token) return
  return jwt.verify(token, process.env.JWT_KEY!)
}



