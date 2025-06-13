// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// FIXED: Correct CommonJS import for the route
const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
