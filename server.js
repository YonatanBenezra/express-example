const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://yonatanbenezra1:123123123@cluster0.ibndotu.mongodb.net/?retryWrites=true&w=majority`,
    {}
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());
app.use("/users", authRoutes);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
