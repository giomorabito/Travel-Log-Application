const{ buildSchema } = require('graphql'); 

const schema =  buildSchema(` 


type Post { 
  id: ID!
  title: String!
  description: String!
  rating: Int!
  location: String!
}
input PostInput { 
    title: String!
    description: String!
    rating: Int!
    location: String!
}
type Query { 
  post(id: ID!): Post
  posts: [Post]
}
type Mutation { 
  createPost(postsInput: PostInput): Post
  deletePost(id: ID!): Post
  updatePost(id: ID!, postInput: PostInput): Post!
}
schema { 
  query: Query
  mutation: Mutation
}
`)

module.exports = schema; 