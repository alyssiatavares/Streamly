import "dotenv/config";
import express from "express";
import { initializeMongoClient } from "./connect.js";
import cors from "cors"; // middleware to handle CORS

const app = express();
const PORT = 3001;

const db = initializeMongoClient();
app.use(cors());
app.get("/", (request, response) => {
  response.send("Hello, World!Updated / test/test2");
});

app.get("/artistspj", async (request, response) => {
  response.send(await db.collection("artistspj").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
