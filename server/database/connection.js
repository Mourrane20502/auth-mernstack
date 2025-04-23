const mongoose = require("mongoose");

async function connectToDatabae() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", () => {
  console.error("Error connecting to MongoDB");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
module.exports = connectToDatabae;
