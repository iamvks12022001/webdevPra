module.exports.user = function (req, res) {
  return res.render("user", {
    title: "user",
    name: " vikash kumar singh",
  });
};

module.exports.profile = function (req, res) {
  return res.render("profile", {
    title: "profile",
    name: " vikash kumar singh",
  });
};
