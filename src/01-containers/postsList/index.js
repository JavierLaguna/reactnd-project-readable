import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Post from '../../00-components/post';

class PostsList extends PureComponent {
  render() {
    const {postsList} = this.props;
    return (
      <div className='posts-list'>
        {postsList.map((post, index) =>
          <Post key={index}
                id={post.id}
                timestamp={post.timestamp}
                title={post.title}
                body={post.body}
                author={post.author}
                category={post.category}
                voteScore={post.voteScore}
          />
        )}
      </div>
    );
  }
}

// mapDispatchToProps

const mapStateToProps = ({posts}) => {
  return {
    postsList: posts.postsList
  };
};

export default connect(mapStateToProps)(PostsList)
