import { NextFunction, Request, Response } from 'express'
import { verifyJWTToken } from '../api/service/auth_services/jwt'

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  console.log("auth runned, with cookie:", req.cookies.access_token)

  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const data = verifyJWTToken(token)
    req.body.user = data
    return next()
  } catch {
    return res.sendStatus(403)
  }
}