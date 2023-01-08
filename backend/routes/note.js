const express = require("express");
const router = express.Router({ mergeParams: true });

const Note = require("../models/notes");

router
    .route("/")
    .get(async (req, res) => {
        // This returns all the notes as an array of objects
        const notes = await Note.find({});
        // Sending the notes from the server to the frontend
        res.status(200).json(notes);
    })
    .post(async (req, res) => {
        // Destructuring the title and description of the note from the request body
        const { title, description } = req.body;
        // Making a new note instance with the received title and description
        const note = new Note({ title, description });
        // Saving the new note in the database
        await note.save();
        // Sending the inserted note to the frontend
        res.status(200).json(note);
    })
    .delete(async (req, res) => {
        // Destructuring the id of the note that is to be deleted from the database
        // It is sent from the frontend
        const { id } = req.body;
        // Deleting the note with the _id : id from the database
        const deletedNote = await Note.findByIdAndDelete(id);
        // Sending the deleted note to the frontend
        res.status(200).json(deletedNote);
    })
    .put(async (req, res) => {
        // Destructuring the id and modified note from the request body
        // It is sent from the frontend
        const { id, modifiedNote } = req.body;
        // Updating the note with _id : id with the modified note
        await Note.findByIdAndUpdate(id, modifiedNote);
        // Sending response back to frontend
        res.status(200).json("success");
    });

module.exports = router;
