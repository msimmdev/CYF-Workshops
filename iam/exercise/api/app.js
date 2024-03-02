var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var catRouter = require("./routes/cats");

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.use("/cats", catRouter);

module.exports = app;
