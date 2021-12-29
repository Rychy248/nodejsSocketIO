"use strict";

const express = require("express");
const todoController = require("./controllers/todoControllers")

const app = express();

// template enggine
app.set("view engine","ejs");

// Middleware
app.use("/assets",express.static("assets"));

// Controller
todoController(app);

// listen app
app.listen("3000","127.0.0.1");