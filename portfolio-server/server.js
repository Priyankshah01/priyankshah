const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration — Allow your frontend domain
app.use(cors({
  origin: "https://portfolio-site-973e.onrender.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// ✅ Route setup
const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

// ✅ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
