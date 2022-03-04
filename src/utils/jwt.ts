import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"

import { IUser } from '../api/model/user/UserInterfaces'

dotenv.config()

export const createJWTToken = (user: IUser) => {

  const secretKey = process.env.JWT_KEY as string

  const token = jwt.sign({ user }, secretKey, {
    expiresIn: "24h"
  })

  return token
}

export const verifyJWTToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_KEY!)
}



