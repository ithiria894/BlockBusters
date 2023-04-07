import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://vercel-admin-user:GNuxLyKvcInnji5G@jake-mongodb-cluster.vepa8dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {}

let client
let clientPromise

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise;