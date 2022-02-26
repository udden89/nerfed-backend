import * as dotenv from "dotenv"

import mongoose from 'mongoose'

dotenv.config()

export async function connectToMongoDB() {
  await mongoose.connect(process.env.DB_CONN_STRING ? process.env.DB_CONN_STRING : "missing mongoURI")
    .catch((error) => {
      console.log(error)
    }).then(() => {
      console.log("connected to DB:", mongoose.connections[0].host)
    })

}