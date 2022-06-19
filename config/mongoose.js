const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://iamvks89:Vikash6999@cluster0.gjaqj.mongodb.net/test?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", function () {
  console.log("can't connect to db");
});

db.once("open", function () {
  console.log("connected to databse :: mongo DB");
});

module.exports = db;
