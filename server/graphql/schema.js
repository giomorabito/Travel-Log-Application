const{ buildSchema } = require('graphql');

const schema =  buildSchema(`

type Post { 
  id: ID!
  createdAt: String!
  userId: String!
  likes: [Like]!
  likeCount: Int!
  name: String!
  title: String!
  description: String!
  rating: String!
  location: String!
  image: String!
}
input PostInput { 
  title: String!
  description: String!
  rating: String!
  location: String!
  image: String!
}
type User { 
  _id: ID!
  email: String!
  token: String!
  name: String!
  createdAt: String!
}
input RegisterInput{
  name: String!
  email: String!
  password: String!
  confirmPassword: String!
}
type Like {
  id: ID!
  createdAt: String!
  userId: String!
}
type Query { 
  post(id: ID!): Post
  posts: [Post]
  user(id: ID!): User
}
type Mutation { 
  createPost(postInput: PostInput): Post!
  deletePost(postId: ID!): String!
  updatePost(id: ID!, postInput: PostInput): Post!
  likePost(postId: ID!): Post!
  register(registerInput: RegisterInput): User!
  login(email: String!, password: String!): User!
}
schema { 
  query: Query
  mutation: Mutation
}
`)

module.exports = schema; 