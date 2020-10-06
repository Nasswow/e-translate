const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const WordSchema = new Schema({
  word: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});
module.exports = Word = mongoose.model("word", WordSchema);
