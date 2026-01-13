const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const path = require("path");
const apiController = require("./controller/apiController");

app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public"), { index: false }));

// API route
app.post("/apiFetch", upload.none(), apiController);

// Root route
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "public", "index.html"));

});

// Use Render's PORT environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
