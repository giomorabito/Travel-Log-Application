const { Schema, model } = require('mongoose');

const postSchema = new Schema({ 
  createdAt: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    refs: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  likes: [
    {
      userId: String,
      createdAt: String
    }
  ],
  likeCount: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

module.exports = model('Post', postSchema); // Post represents the posts DB collection