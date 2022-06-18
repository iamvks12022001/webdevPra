module.exports.home = function (req, res) {
  return res.render("home", {
    title: "home",
    name: " vikash kumar singh",
  });
};
