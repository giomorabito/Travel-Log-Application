const Post = require('../../models/post.js');
const checkAuth = require('./middleware/check-auth.js')
const { UserInputError } = require('apollo-server-errors');
  
  async function posts() { 
    const posts = await Post.find({}).sort({createdAt: -1})
    return posts;
  }
  
  async function post(args) {
    const post = await Post.findById(args.id)
    return post;
  }
  
  async function createPost(args, context) {
    const user = checkAuth(context);

    let newPost = new Post({
    ...args.postInput,
    userId: user.id,
    name: user.name,
    createdAt: new Date().toISOString(),
    likeCount: 0,
    });

    const post = await newPost.save();
    return post;
  }
  
  async function deletePost(args, context) {
    const user = checkAuth(context);
    const post = await Post.findById(args.postId);
    const postId = await (post._doc.userId).toString();

    if(user.id === postId){
      await post.delete();
      return "Post deleted successfully";
    }
    else{
      throw new Error('Action not allowed');
   }
  }
  
  async function updatePost(args, context) {
    const user = checkAuth(context);
    const post = await Post.findById(args.id);
    const postId = await (post._doc.userId).toString();

    if(user.id === postId){
      const post = await Post.findByIdAndUpdate(args.id, args.postInput, { new: true });
      return post;
    }
    else{
      throw new Error('Action not allowed');
    }
  }

  async function likePost(args, context){
    const user = checkAuth(context);
    const post = await Post.findById(args.postId);

    if(post){
      if(post.likes.find(like => like.userId === user.id)){
        post.likes = post.likes.filter(like => like.userId !== user.id);
      }
      else{
        post.likes.push({
          userId: user.id,
          createdAt: new Date().toISOString()
        })
      }

      post.likeCount = post.likes.length;
      await post.save();
      return post;
    }
    else throw new UserInputError('Post not found');
  }
  
  module.exports = { posts, post, createPost, deletePost, updatePost, likePost,
}