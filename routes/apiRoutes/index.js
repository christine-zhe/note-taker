const router = require("express").Router();

const fs = require('fs');
const path = require('path');
let allNotes = require("../../db/db.json");

const { v4: uuidv4 } = require('uuid');


router.post("/notes", (req, res) => {
  const note = req.body;

  //creating ID for each note
  note.id = uuidv4();
  allNotes.push(note);

  writeNote();

  //adds to left side
  res.json(allNotes);
});

// gets notes
router.get("/notes", (req, res) => {
  let results = allNotes;
  res.json(results);
});

// function to write the notes
function writeNote(note) {

  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(allNotes, null, 2),
    () => {
      console.log("Notes captured!");

    }

  )
}

module.exports = router;
