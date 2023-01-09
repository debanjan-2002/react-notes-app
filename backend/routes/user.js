const express = require("express");
const passport = require("passport");
const router = express.Router();

const User = require("../models/users");

router.route("/login").post(
    passport.authenticate("local", {
        failureRedirect: "/login",
        keepSessionInfo: true
    }),
    (req, res) => {
        res.json(req.user);
    }
);

router.route("/register").post(async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({
            email,
            username
        });
        const response = await User.register(user, password);
        res.json(response);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;
