const express = require("express");
const router = express.Router({ mergeParams: true });

const notes = require("../controllers/notes");

router
    .route("/")
    .get(notes.getNotes)
    .post(notes.postNote)
    .delete(notes.deleteNote)
    .put(notes.updateNote);

module.exports = router;
