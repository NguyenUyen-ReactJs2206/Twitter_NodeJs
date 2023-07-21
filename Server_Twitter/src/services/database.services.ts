import { Collection, Db, MongoClient } from 'mongodb'
import { config } from 'dotenv'
import User from '../models/schemas/User.schema'
config()

console.log(process.env.DB_USERNAME)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.3uar69c.mongodb.net/?retryWrites=true&w=majority`

class DatabaseSevice {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }

  //Get User --- db: twitter-dev --co-- collection: users
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLECTION as string)
  }
}

//Create Object from DatabaseService
const databaseService = new DatabaseSevice()
export default databaseService

// Cach cu~
// const client = new MongoClient(uri)
// export async function run() {
//   try {
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 })
//     console.log('Pinged your deployment. You successfully connected to MongoDB!')
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
// run().catch(console.dir)
