import { NextFunction, Request, Response } from 'express'
import { verifyJWTToken } from '../utils/jwt'

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const data = verifyJWTToken(token)
    console.log("auth:", data)
    /*  req.userId = data.id
     req.userRole = data.role */
    return next()
  } catch {
    return res.sendStatus(403)
  }
}