import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Header from './01-containers/header';
import Modal from './01-containers/modal';
import PostsList from './01-containers/postsList';
import Post from './01-containers/post';
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
        <Route exact path='/' component={PostsList}/>
        <Route path='/post/:postId' component={Post}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(getAllCategories()),
    getAllPosts: () => dispatch(getAllPosts())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))



