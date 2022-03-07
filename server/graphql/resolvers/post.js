const Post = require('../../models/post.js');
const { GraphQLDateTime } = require ('graphql-iso-date');

const customScalarResolver = {
    Date: GraphQLDateTime
  };
  
  function posts() { 
    return Post.find({});
  }
  
  function post(args) {
    return Post.findById(args.id)
  }
  
  function createPost(args) {
    let post = new Post(args.postInput);
    return post.save();
  }
  
  function deletePost(args) {
    return Post.findByIdAndRemove(args.id);
  }
  
  function updatePost(args) {
    return Post.findByIdAndUpdate(args.id, args.postInput, { new: true }); 
  }
  
  module.exports = { posts, post, createPost, deletePost, updatePost, customScalarResolver}