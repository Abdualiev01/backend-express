const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://mrabrorabdualiev:A908868268a@cluster0.sf2znz0.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

module.exports = { connect };
