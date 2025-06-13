const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Proper CORS setup for Render
app.use(cors({
  origin: "*", // or use your frontend URL instead of '*'
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// Route setup
const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

// Catch-all OPTIONS to manually handle preflight
app.options("*", cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
