import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PostCard from '../../00-components/postCard';
import NewPostCard from '../../00-components/newPostCard';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import {addPostAction, generateUUID} from '../../02-actions/posts/postsActions';
import {CREATE_POST_MODAL} from '../../constants/app/modal';
import {POST_DEFAULT_VALUES} from '../../constants/posts/posts';

class PostsList extends PureComponent {

  openNewPostModal() {
    const containerProps = {
      saveChanges: this.addNewPost.bind(this)
    };
    this.props.showModalAction(CREATE_POST_MODAL, containerProps);
  }

  addNewPost(newPost) {
    newPost.id = POST_DEFAULT_VALUES.id();
    newPost.timestamp = POST_DEFAULT_VALUES.timestamp();
    newPost.voteScore = POST_DEFAULT_VALUES.voteScore;
    newPost.deleted = POST_DEFAULT_VALUES.deleted;
    this.props.addPostAction(newPost);
    this.props.hideModalAction();
  }

  render() {
    const {postsList} = this.props;
    return (
      <div className='posts-list'>
        {postsList.map((post, index) =>
          <PostCard key={index}
                    id={post.id}
                    timestamp={post.timestamp}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    voteScore={post.voteScore}
          />
        )}
        <NewPostCard onClick={this.openNewPostModal.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => {
  return {
    postsList: posts.postsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModalAction: (modalType, containerProps) => dispatch(showModalAction(modalType, containerProps)),
    addPostAction: (newPost) => dispatch(addPostAction(newPost)),
    hideModalAction: () => dispatch(hideModalAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
