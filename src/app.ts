import Express, { Request, Response, Application } from 'express'
import { connectToMongoDB } from './db'
import router from './api/routes'

const port = 8080

const app: Application = Express()



const createApp = async () => {

  connectToMongoDB()

  app.use(router)

  app.get('/', (req, res) => {
    res.send('Hello Sir!')
  })

}

createApp()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})