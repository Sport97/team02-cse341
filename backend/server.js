const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");
const professionalRoutes = require("./routes/professional");

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
