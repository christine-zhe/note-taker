const router = require("express").Router();

// const { append } = require("express/lib/response");
const fs = require('fs');
const path = require('path');
// const { v4: uuidv4 } = require("uuid");
let allNotes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    
  res.json(allNotes);
});





    module.exports = router;
