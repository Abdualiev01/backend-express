const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { connect } = require("./db");
const authRoute = require("./Routes/authRoutes");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

connect()
  .then(() => {
    console.log("MongoDB Successfully Connected");
    app.use("/auth", authRoute);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
