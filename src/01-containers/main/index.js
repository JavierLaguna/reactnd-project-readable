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
    const {postsList, history, match} = this.props;
    const categoryFilter = match.params.category || null;
    let posts = [...postsList];

    if (categoryFilter) {
      posts= posts.filter((post)=>(post.category === categoryFilter));
    }
    posts = orderBy(posts, ['voteScore'], ['desc']);

    return (
      <div className='main-container'>
        <Filters history={history} match={match}/>
        <PostsList postsList={posts}/>
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

