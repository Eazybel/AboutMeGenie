// Import required modules
const { urlencoded } = require("body-parser") // (not actually used here, Express has built-in urlencoded)
const express = require("express")
const app = express()
const path = require("path")
require("dotenv").config() // load environment variables from .env file

// Middleware setup
app.use(express.urlencoded({ extended: true })) // parse URL-encoded form data
app.use(express.static(path.join(__dirname, "public"))) // serve static files from "public" folder
app.use(express.json()) // parse JSON request bodies

// Route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "/index.html")) // send index.html when visiting "/"
})

// Start server on port 5000
app.listen(5000, (req, res) => {
    console.log("server started") // log when server is running
})
