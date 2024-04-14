const PORT = 4000
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")

const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Server is on!");
});

module.exports = app;