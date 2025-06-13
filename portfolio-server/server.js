// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow specific frontend origin
app.use(cors({
  origin: "https://portfolio-site-973e.onrender.com",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.options("*", cors()); // Allow preflight across routes

app.use(express.json());

const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
