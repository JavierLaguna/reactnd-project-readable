import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import {addPost, getAllPosts, votePost, deletePost, editPost} from '../../02-actions/posts/postsActions';
import './index.css';

class Post extends PureComponent {
  render() {
    const {postsList, comments, match} = this.props;
    const {postId} = match.params;
    const post = postsList.filter((post) => {
      return postId === post.id;
    })[0];
    const postComments = comments[postId] || [];

    return (
      <div className='post'>
        <div className='post__post-content'>
          AA
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({posts, categories, comments}) => {
  return {
    postsList: posts.postsList.filter((post) => !post.deleted),
    categories: categories.categoriesList,
    comments: comments.commentsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModalAction: (modalType, containerProps) => dispatch(showModalAction(modalType, containerProps)),
    addPost: (newPost) => dispatch(addPost(newPost)),
    editPost: (post) => dispatch(editPost(post)),
    votePost: (postId, vote) => dispatch(votePost(postId, vote)),
    hideModalAction: () => dispatch(hideModalAction()),
    getAllPosts: () => dispatch(getAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)
