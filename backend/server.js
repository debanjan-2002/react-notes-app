const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/users");

const noteRoutes = require("./routes/note");
const userRoutes = require("./routes/user");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.use(express.json());

app.use(
    session({
        secret: "thisisnotasecret",
        resave: false,
        name: "session-config",
        saveUninitialized: true,
        cookie: { httpOnly: true, maxAge: 60 * 60 * 24 * 7 }
    })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.set("strictQuery", true);

// Connecting to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/react-notes-app")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: " + err.message));

app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoutes);

// Setting up PORT
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
