const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connect = require("./config/db");

app.listen(3001, async () => {
  await connect();
  console.log("listening to 2345");
});
