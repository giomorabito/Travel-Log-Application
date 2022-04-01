import React from 'react';
//import {
//  AppBar,
//  Toolbar,
//  CssBaseline,
//  Typography,
//  makeStyles,
//} from "@material-ui/core";

import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/pages/Home';
import PostList from './components/posts/PostList';
import PostInfo from './components/posts/PostInfo';
import LogIn from './components/pages/LogIn';
import Register from './components/pages/Register';
import { AuthProvider } from './util/auth';
import AuthRoute from './util/AuthRoute';
import PostAdd from './components/posts/PostAdd';
import PostEdit from './components/posts/PostEdit';
import BookmarkList from './components/posts/BookmarkList';
import UserPostList from './components/posts/UserPostList';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
      <Router>          
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

function Main() {
  return(
  <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/my_bookmarks" component={BookmarkList} />
        <Route exact path="/my_posts" component={UserPostList} />
        <Route exact path="/posts/:_id" component={PostInfo} />
        <Route exact path="/posts/:_id/edit" component={PostEdit} />
        <Route exact path="/newpost" component={PostAdd} />
        <AuthRoute exact path="/login" component={LogIn} />
        <AuthRoute exact path="/register" component={Register} />
  </Switch>
  );
}

export default App;
