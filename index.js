const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function (err) {
  if (err) {
    console.log("server not started bcz", err);
  } else {
    console.log("server  started on", port);
  }
});
