const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const app = express()
const router = require('./routes.js')
app.use(express.json());
const cors = require("cors");
app.use(cors())

app.use('/',router);
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.DB_NAME })
.then((result) => {
    app.listen(process.env.PORT || 8000);
    console.log("Listening")}
)
.catch((error) => {
    console.log(error);}
);