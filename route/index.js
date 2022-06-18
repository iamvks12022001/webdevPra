const express = require("express");
const router = express.Router();
const home_controller = require("../controller/home_controller");
router.get("/", home_controller.home);
router.use("/user", require("./user"));

//for wrong route - redirect to 404 page
router.get("*", function (req, res) {
  res.status(404).render("error", {
    title: "error 404",
  });
});
module.exports = router;
