const express = require("express");
const port = 1011;
const path = require("path");

let app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server is running on port " + port);
});
