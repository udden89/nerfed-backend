import jwt from 'jsonwebtoken'
import { IUser } from '../api/model/user/UserInterfaces'


const createJWTToken = (user: IUser) => {

  const secretKey = process.env.JWT_KEY as string

  const token = jwt.sign({ user }, secretKey, {
    expiresIn: "24h"
  })

  return token
}

export = createJWTToken

