const express = require("express");

const router = express.Router();
const Word = require("../../models/Word");

router.get("/", async (req, res) => {
  try {
    const words = await Word.find();
    if (!words) throw Error("No Words Found");
    res.status(200).json(words);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
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
