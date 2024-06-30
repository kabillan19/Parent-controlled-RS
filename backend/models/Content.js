const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  ageRating: { type: String, required: true },
  genre: { type: String, required: true },
  educationalValue: { type: Boolean, default: false },
});

module.exports = mongoose.model('Content', ContentSchema);
