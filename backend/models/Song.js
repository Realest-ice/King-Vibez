const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  audioUrl: String,
  coverUrl: String,
  releasedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Song', SongSchema);
