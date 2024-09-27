const express = require("express");
const { CreateData } = require("../Controller/database");
const router = express.Router();

// import the controllers

// routes 
router.post("/createAddress" , CreateData);


//export the routes
module.exports = router;