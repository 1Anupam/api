require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const cors = require("cors");

const mongoString = process.env.DATABASE_URL;
mongoose.set("strictQuery", false);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", routes);

app.post("/problems", function (req, res) {
  // Insert JSON straight into MongoDB
  database.collection("Problems").insertOne(req.body);
  res.status(200).send('inserted');
});

app.post("/users", function (req, res) {
  // Insert JSON straight into MongoDB
  database.collection("users").insertOne(req.body)
  res.status(200).send('inserted');
});

app.post("/tests", function (req, res) {
  // Insert JSON straight into MongoDB
  database.collection("tests").insertOne(req.body);
  res.status(200).send('inserted');
  
});

app.listen(8000, () => {
  console.log(`Server Started at ${3000}`);
});
