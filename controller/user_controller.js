const User = require("../model/user.js");
module.exports.user = function (req, res) {
  return res.render("user", {
    title: "user",
    name: " vikash kumar singh",
  });
};

module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findOne({ _id: req.cookies.user_id }, function (err, user) {
      if (user) {
        return res.render("profile", {
          title: "profile",
          name: user.name,
          email: user.email,
          password: user.password,
        });
      } else {
        return res.redirect("/user/sign-in");
      }
    });
  } else {
    return res.redirect("/user/sign-in");
  }
};

module.exports.signin = function (req, res) {
  return res.render("sign_in", {
    title: "sign in",
  });
};
module.exports.signup = function (req, res) {
  return res.render("sign_up", {
    title: "sign up",
  });
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in sign in ", err);
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("user cant be created ", err);
          return;
        }
        return res.redirect("/user/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};
module.exports.create_session = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("cant find the user ", err);
      return;
    }
    if (user) {
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      res.cookie("user_id", user._id);
      return res.redirect("/user/profile");
    }
  });
};

module.exports.destroy_session = function (req, res) {
  res.clearCookie("user_id");
  return res.redirect("/");
};
