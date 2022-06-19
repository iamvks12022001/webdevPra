const express = require("express");
const app = express();
const port = 8000;
const expresslayout = require("express-ejs-layouts");
const db = require("./config/mongoose");
app.set("view engine", "ejs");
//app.set("views", "./views");

app.use(expresslayout);
app.use(express.static("./assets"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./route"));

app.listen(port, function (err) {
  if (err) {
    console.log("server not started bcz", err);
  } else {
    console.log("server  started on", port);
  }
});
