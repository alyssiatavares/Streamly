import "dotenv/config";
import express from "express";
import { initializeMongoClient } from "./connect.js";
import cors from "cors"; // middleware to handle CORS
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

const db = initializeMongoClient();
app.use(cors());
app.get("/api/", (request, response) => {
  response.send("Hello, World!Updated / test/test2");
});

app.get("/api/artistspj", async (request, response) => {
  response.send(await db.collection("artistspj").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../Front-end/dist")));
app.get("/{*any}", async (request, response) => {
  response.sendFile(path.join(__dirname, "../Front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
