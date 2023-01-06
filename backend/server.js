const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);

const Note = require("./models/notes.js");

// Connecting to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/react-notes-app")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: " + err.message));

// DONE: Fetching all the notes from MongoDB
app.get("/api/notes", async (req, res) => {
    // This returns all the notes as an array of objects
    const notes = await Note.find({});
    // Sending the notes from the server to the frontend
    res.json(notes);
});

// DONE: Receiving the new note body sent from the frontend and saving it in the database
app.post("/api/notes", async (req, res) => {
    // Destructuring the title and description of the note from the request body
    const { title, description } = req.body;
    // Making a new note instance with the received title and description
    const note = new Note({ title, description });
    // Saving the new note in the database
    await note.save();
    // Sending the inserted note to the frontend
    res.json(note);
});

// Setting up PORT
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
