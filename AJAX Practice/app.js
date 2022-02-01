const path = require("path");

const express = require("express");

const ajaxRequest = require("./routes/ajaxReq")

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))

app.use(ajaxRequest);

app.listen("3000")
