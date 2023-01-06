const mongoose = require("mongoose");
const { Schema } = mongoose;

// Setting up the notes schema using mongoose schema
const noteSchema = new Schema({
    // Title of the note
    title: {
        type: String,
        required: true
    },
    // Description (body) of the note
    description: {
        type: String,
        required: true
    },
    // Date of note
    lastModified: {
        type: Date,
        default: Date.now
    }
});

// Building the model from the schema
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
