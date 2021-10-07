const express = require("express");
const app = express();
const studentController = require("./controllers/student.controller");
const connect = require("./configs/db");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/students", studentController);

app.listen(3001, async () => {
  await connect();
  console.log("listening to 3001");
});
