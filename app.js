require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index");
const db= require('./util/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect();

app.use(routes);

app.listen(port, () => {
    console.log("Server listening in port " + port);
  });