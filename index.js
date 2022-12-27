require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/route');
const Model = require("./models/model");
const cors = require('cors')


const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(cors())

app.use(express.json());
app.use('/api', routes)

app.post('/problems', function(req, res) {
  // Insert JSON straight into MongoDB
 database.collection('Problems').insertOne(req.body, function (err, result) {
     if (err)
        res.send('Error');
     else
       res.send('Success');

 });
});

app.post('/tests', function(req, res) {
  // Insert JSON straight into MongoDB
 database.collection('tests').insertOne(req.body, function (err, result) {
     if (err)
        res.send('Error');
     else
       res.send('Success');

 });
});


app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
