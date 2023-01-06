const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
mongoose.set("strictQuery", true);

const Note = require("./models/notes.js");

// Connecting to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/react-notes-app")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: " + err.message));

// DONE: Fetching all the notes from MongoDB
app.get("/notes", async (req, res) => {
    // This returns all the notes as an array of objects
    const notes = await Note.find({});
    // Sending the notes from the server to the frontend
    res.json(notes);
});

// Setting up PORT
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
