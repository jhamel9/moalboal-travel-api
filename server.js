// server.js
// Entry point of the Moalboal Travel API
// Team Dev404

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// ✅ Default route (for testing)
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Moalboal Travel API 🌊🐢",
    status: "Running",
    version: "1.0.0"
  });
});

// ✅ Example: List of activities
app.get("/activities", (req, res) => {
  res.json([
    { id: 1, name: "Snorkeling at Pescador Island", type: "Water Activity" },
    { id: 2, name: "Turtle Watching", type: "Wildlife Experience" },
    { id: 3, name: "Sardine Run at Panagsama Beach", type: "Water Activity" },
    { id: 4, name: "Canyoneering at Kawasan Falls", type: "Adventure" }
  ]);
});

// ✅ Example: Travel info endpoint
app.get("/info", (req, res) => {
  res.json({
    location: "Moalboal, Cebu, Philippines",
    bestSeason: "November - May",
    description: "Moalboal is famous for its sardine run, pristine beaches, and diving spots."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
