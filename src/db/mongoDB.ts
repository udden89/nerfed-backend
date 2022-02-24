import * as dotenv from "dotenv"
import * as mongoDB from "mongodb"

export async function connectToMongoDB() {
  dotenv.config()

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!)

  await client.connect()

  const db: mongoDB.Db = client.db(process.env.DB_NAME)


  console.log(`Successfully connected to database: ${db.databaseName}`)
}