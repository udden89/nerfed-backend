import Express, { Request, Response, Application } from 'express'
import express from 'express'
import { connectToMongoDB } from './db'
import router from './api/routes'
import cors from 'cors'

const port = 8080

const app: Application = Express()

const createApp = async () => {

  connectToMongoDB()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded())

  app.use(router)

}

createApp()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})