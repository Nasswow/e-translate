const express = require("express");

const router = express.Router();
const Word = require("../../models/Word");

router.get("/", (req, res) => {
  Word.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.post("/", (req, res) => {
  const newWord = new Word({
    word: req.body.word,
    translation: req.body.translation,
  });
  newWord.save().then((word) => res.json(word));
});
router.delete("/:id", (req, res) => {
  Word.findById(req.params.id)
    .then((word) => word.remove().then(() => res.json({ Success: true })))
    .catch((err) => res.status(404).json({ Success: false }));
});
module.exports = router;
