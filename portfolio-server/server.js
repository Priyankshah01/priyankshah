// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Parse incoming JSON
app.use(express.json());

// Route setup (no `.default`)
app.use("/api/contact", require("./routes/contact"));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
