import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Header from './01-containers/header';
import Modal from './01-containers/modal';
import PostsList from './01-containers/postsList';
import Post from './01-containers/post';
import {getAllCategories} from './02-actions/categories/categoriesActions';
import {Route} from 'react-router-dom';

class App extends PureComponent {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Modal/>
        <Route exact path='/' component={PostsList}/>
        <Route exact path='/post' component={Post}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(getAllCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)



