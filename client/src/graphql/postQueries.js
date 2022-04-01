import { gql } from 'apollo-boost';

const GET_POSTS = gql`
  {
    posts {
      id
      createdAt
      userId
      likeCount
      likes{
          userId
      }
      title
      rating
      location
      image
      name
      description
    }
  }
`;

const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
        id
        userId
        title
        description
        rating
        location
        image
        createdAt
        likeCount
        likes{
          userId
        }
        name
    }
  }
`;

const GET_USER_POSTS = gql`
  {
    userPosts {
      id
      createdAt
      userId
      likeCount
      likes{
          userId
      }
      title
      rating
      location
      image
      name
      description
    }
  }
`;

const GET_USER_BOOKMARKS = gql`
  {
    userBookmarks {
      id
      createdAt
      userId
      likeCount
      likes{
          userId
      }
      title
      rating
      location
      image
      name
      description
    }
  }
`;

const CREATE_POST = gql`
  mutation createPost($title: String!, $description: String!, $rating: String!, $location: String!, $image: String!){
    createPost(postInput: { title: $title, description: $description, rating: $rating, location: $location, image: $image}) {
        id
        userId
        name
        createdAt
        likeCount
        likes{
          id
          createdAt
          userId
        }
        title
        description
        rating
        location
        image
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $description: String!, $rating: String!, $location: String!, $image: String!){
    updatePost(id: $id, postInput: { title: $title, description: $description, rating: $rating, location: $location, image: $image}) {
        id
        userId
        name
        createdAt
        likeCount
        likes{
          id
          createdAt
          userId
        }
        title
        description
        rating
        location
        image
    }
  }
`;

const LIKE_POST = gql`
mutation likePost($postId: ID!){
    likePost(postId: $postId) {
      id
      likes {
        id
        userId
      }
      likeCount
  }
}
`;

const DELETE_POST = gql`
mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!, $confirmPassword: String!){
    register(registerInput: {name: $name, email: $email, password: $password, confirmPassword: $confirmPassword}){
      _id
      email
      name
      createdAt
      token
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      _id
      email
      name
      createdAt
      token
    }
  }
`;

export { GET_POSTS, GET_POST, GET_USER_POSTS, GET_USER_BOOKMARKS, CREATE_POST, LIKE_POST, UPDATE_POST, DELETE_POST, REGISTER_USER, LOGIN_USER };