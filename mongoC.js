import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

console.log("process.env.MONGO_PASSWORD", process.env.MONGO_PASSWORD);
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
// const connectionString = `mongodb+srv://integrationninjas:${password}@devcluster.xf2gcci.mongodb.net/?retryWrites=true&w=majority`; // clustore url
const connectionString = `mongodb+srv://BlueMarron:${password}@bluemarron.496xb.mongodb.net/my_website1?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
