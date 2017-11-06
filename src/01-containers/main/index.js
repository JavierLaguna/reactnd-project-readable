import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Filters from '../filters';
import PostsList from '../postsList';
import {orderBy} from 'lodash';
import './main.css';

class Main extends PureComponent {

  static propTypes = {
    postsList: PropTypes.array.isRequired
  };

  static defaultProps = {
    postsList: []
  };

  state = {};

  render() {
    const {postsList} = this.props;
    let orderedPosts = orderBy(postsList, ['voteScore'], ['desc']);

    return (
      <div className='main-container'>
        <Filters />
        <PostsList postsList={orderedPosts}/>
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => {
  return {
    postsList: posts.postsList.filter((post) => !post.deleted)
  };
};

export default connect(mapStateToProps)(Main)

