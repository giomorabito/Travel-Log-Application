const{ buildSchema } = require('graphql');

const schema =  buildSchema(`

scalar Date

type Post { 
  id: ID!
  title: String!
  description: String!
  rating: Int!
  location: String!
  image: String!
  createdAt: Date!
}
input PostInput { 
  title: String!
  description: String!
  rating: Int!
  location: String!
  image: String!
  createdAt: Date!
}
type User { 
  id: ID!
  email: String!
  username: String!
  token: String!
  createdAt: String!
}
input RegisterInput{
  username: String!
  password: String!
  confirmPassword: String!
  email: String!
}
type Query { 
  post(id: ID!): Post
  posts: [Post]
  user(id: ID!): User
}
type Mutation { 
  createPost(postInput: PostInput): Post
  deletePost(id: ID!): Post
  updatePost(id: ID!, postInput: PostInput): Post!
  register(registerInput: RegisterInput): User!
  login(email: String!, password: String!): User!
}
schema { 
  query: Query
  mutation: Mutation
}
`)

module.exports = schema; 