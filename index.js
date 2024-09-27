const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");

const PORT = process.env.PORT || 4000
// middleware use to pass the JSON data -->
app.use(express.json());

// middleware use to pass the formData in postman -
const upload = multer();
app.use(upload.none());

const dbConnect = require("./Database/database");
dbConnect();


// import the router 
const user = require("./Routes/routes");
app.use("/api/v1" , user);

// start the server 
app.listen( PORT , () => {
    console.log(`Server Started successfully at ${PORT} number`)
})

app.get( "/" , (req , res) => {
    res.send("<h1>Hello Baby...</h1>")
})