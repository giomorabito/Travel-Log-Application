import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_POST, UPDATE_POST } from '../../graphql/postQueries';

function PostEdit(props) {
  function handleCancel(id) {
    props.history.push(`/posts/${id}`);
  }

  let title, description, rating, location, image;
  return (
    <Query query={GET_POST} variables={{ id: props.match.params._id }}>
      {function({ loading, error, data }) {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { post } = data;
        return (
          <div>
            <h1>Edit {post.title}</h1>
            <Mutation mutation={UPDATE_POST}>
              {function(updatePost, { loading, error }) { 
                return( 
                  <div>
                    <form
                      onSubmit={function(event) {
                        event.preventDefault();
                        updatePost({ 
                          variables: {
                            id: post.id,
                            title: title.value,
                            description: description.value,
                            rating: Number.parseInt(rating.value,10),
                            location: location.value,
                            createdAt: post.createdAt
                          }
                        });
                        props.history.push(`/posts/${post.id}`);
                      }}
                    >
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control"
                          defaultValue={post.title} 
                          ref={function(node) { return title = node; }} />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control"
                          defaultValue={post.description} 
                          ref={function(node) { return description = node; }} />
                      </div>
                      <div className="form-group">
                        <label>Rating:</label>
                        <input type="text" className="form-control"
                        defaultValue={post.rating} 
                        ref={function(node) { return rating = node; }} 
                        />
                      </div>
                      <div className="form-group">
                        <label>Location:</label>
                        <input type="text" className="form-control"
                        defaultValue={post.location} 
                        ref={function(node) { return location = node; }} 
                        />
                      </div>
                      <div className="form-group">
                        <label>Image:</label>
                        <input type="text" className="form-control"
                        defaultValue={post.image}
                        ref={function(node) { return image = node; }} 
                        />
                      </div>
                      <div className="btn-group">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="button" className="btn btn-secondary" 
                          onClick={function() { handleCancel(post.id) }}>Cancel</button>
                      </div>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error : {error.message}</p>}
                  </div>
                )
              }}
            </Mutation>
          </div>
        );
      }}
    </Query>      
  )
}

export default PostEdit;