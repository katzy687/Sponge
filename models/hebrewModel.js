var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hebrewSchema = new Schema({
  Hebrew: String,
  English: String,
  Sound:String,
  Transliteration: String
});

var Hebrew = mongoose.model('Hebrew', hebrewSchema);

module.exports = Hebrew;
