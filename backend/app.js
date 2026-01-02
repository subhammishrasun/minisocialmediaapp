const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const postRoutes = require("./routes/postRoutes");

const app = express();

// DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Mini Social Media API Running 🚀");
});

module.exports = app;
