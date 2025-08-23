// JavaScript is assinchronous, so we need to use async/await or promises to handle the connection
// await is used to wait for the connection to be established before proceeding
import { MongoClient } from "mongodb";

export const initializeMongoClient = () => {
  console.log("Connecting to MongoDB...", process.env.DB_URI);
  const client = new MongoClient(process.env.DB_URI);
  return client.db("artists");
};
