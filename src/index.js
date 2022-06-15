const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const signupController = require("./controllers/signup.controller");
const loginController = require("./controllers/login.controller");
const taskController = require("./controllers/task.controller");
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
const port = process.env.PORT || 8086;

app.use("/signup", signupController);
app.use("/login", loginController);
app.use("/task", taskController);
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://kritika176:kritika176@cluster0.7rdip.mongodb.net/Eccom");
  } catch (err) {
    console.log(err.message);
  }
};

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening on port " + port);
  } catch (err) {
    console.log(err.message);
  }
});
