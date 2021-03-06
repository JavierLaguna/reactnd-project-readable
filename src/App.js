import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Header from './01-containers/header';
import Modal from './01-containers/modal';
import MainContainer from './01-containers/main';
import PostContainer from './01-containers/post';
import {getAllCategories} from './02-actions/categories/categoriesActions';
import {getAllPosts} from './02-actions/posts/postsActions';
import {Route, withRouter} from 'react-router-dom';

class App extends PureComponent {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Modal/>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/:category' component={MainContainer}/>
        <Route exact path='/:category/:postId' component={PostContainer}/>
      </div>
    );
  }
}

export default withRouter(connect(null, {getAllCategories, getAllPosts})(App))
