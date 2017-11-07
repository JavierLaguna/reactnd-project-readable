import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Filters from '../filters';
import PostsList from '../postsList';
import {orderBy} from 'lodash';
import './main.css';

class Main extends PureComponent {

  static propTypes = {
    postsList: PropTypes.array.isRequired,
    postOrder: PropTypes.object.isRequired
  };

  static defaultProps = {
    postsList: [],
    postOrder: {}
  };

  state = {};

  render() {
    const {postsList, history, match, postOrder} = this.props;
    const categoryFilter = match.params.category || null;
    let posts = [...postsList];

    if (categoryFilter) {
      posts= posts.filter((post)=>(post.category === categoryFilter));
    }
    posts = orderBy(posts, [postOrder.field], [postOrder.type]);

    return (
      <div className='main-container'>
        <Filters history={history} match={match}/>
        <PostsList postsList={posts}/>
      </div>
    );
  }
}

const mapStateToProps = ({app, posts}) => {
  return {
    postOrder: app.postOrder,
    postsList: posts.postsList.filter((post) => !post.deleted)
  };
};

export default connect(mapStateToProps)(Main)
