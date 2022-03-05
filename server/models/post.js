const { Schema, model } = require('mongoose');

const postSchema = new Schema({ 
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
});

module.exports = model('Post', postSchema); // Post represents the posts DB collection