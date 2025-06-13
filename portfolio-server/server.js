// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow only your frontend domain
const allowedOrigins = ["https://portfolio-site-973e.onrender.com"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// ✅ Use CommonJS require without `.default`
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
