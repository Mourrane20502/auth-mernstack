const express = require("express");
const connectToDatabae = require("./database/connection");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 4001;

app.use("/api", authRoutes);
app.use("/dashboard", userRoutes);
connectToDatabae();

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
