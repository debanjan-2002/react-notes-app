const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);
app.use(express.json());
mongoose.set("strictQuery", true);

const noteRoutes = require("./routes/note");

// Connecting to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/react-notes-app")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: " + err.message));

app.use("/api/notes", noteRoutes);

// Setting up PORT
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
