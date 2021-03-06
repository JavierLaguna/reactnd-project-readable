import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ClassNames from 'classnames';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import CategoryLogo from '../../00-components/categoryLogo';
import CommentsList from '../../00-components/commentsList';
import CommentEditable from '../../00-components/commentEditable';
import {convertDate} from '../../utils/dates';
import {votePost, deletePost, editPost} from '../../02-actions/posts/postsActions';
import {voteComment, addComment, editComment, deleteComment} from '../../02-actions/comments/commentsActions';
import {EDIT_POST_MODAL} from '../../constants/app/modal';
import {VOTE_NEGATIVE, VOTE_POSITIVE} from '../../constants/posts/posts';
import {COMMENT_DEFAULT_VALUES} from '../../constants/comments/comments';
import {orderBy} from 'lodash';
import './index.css';

class Post extends PureComponent {
  votePost(postId, vote) {
    this.props.votePost(postId, vote);
  }

  editPost(postId) {
    let post = this.props.postsList.filter((post) => post.id === postId);
    post = post[0];
    const containerProps = {
      saveChanges: (editedPost) => {
        editedPost = {
          ...post,
          ...editedPost
        };
        this.props.editPost(editedPost);
        this.props.hideModalAction();
      },
      categories: this.props.categories,
      post
    };
    this.props.showModalAction(EDIT_POST_MODAL, containerProps);
  }

  deletePost(postId) {
    this.props.deletePost(postId);
    this.props.history.push('/');
  }

  newComment(postId, comment) {
    comment.id = COMMENT_DEFAULT_VALUES.id();
    comment.timestamp = COMMENT_DEFAULT_VALUES.timestamp();
    comment.parentId = postId;
    this.props.addComment(comment);
  }

  voteComment(vote, commentId) {
    this.props.voteComment(commentId, vote);
  }

  editComment(comment) {
    comment.timestamp = COMMENT_DEFAULT_VALUES.timestamp();
    this.props.editComment(comment);
  }

  deleteComment(comment) {
    this.props.deleteComment(comment);
  }

  render() {
    const {postsList, comments, match} = this.props;
    const {postId} = match.params;
    const post = postsList.length !== 0 ? postsList.filter((post) => {
      return postId === post.id;
    })[0] : {};
    const postComments = comments[postId] ? orderBy(comments[postId], ['voteScore'], ['asc']).filter((comment) => (!comment.deleted)) : [];

    if (!post) {
      return (
        <div>Post not found.</div>
      )
    }

    return (
      <div className='post'>
        <div className='post__post-content'>
          <div className='post__post-header'>
            <div className='post__post-title'>
              <span>{post.title}</span>
            </div>
            <div className='post__post-author-date'>
              <span><i className='fa fa-user'/> {`${post.author}, ${convertDate(post.timestamp)}`}</span>
            </div>
          </div>
          <div className='post__post-body'>
            <div className='post__body-content'>
              "{post.body}"
            </div>
            <div className='post__body-options'>
              <span className='post__body-option' onClick={this.editPost.bind(this, postId)}>
                <i className='fa fa-edit'/>
              </span>
              <span className='post__body-option' onClick={this.deletePost.bind(this, postId)}>
                <i className='fa fa-trash'/>
              </span>
            </div>
          </div>
          <div className='post__post-footer'>
            <CategoryLogo category={post.category}/>
            <div className='post__post-votes'>
              <span className={ClassNames({
                'post__post-score': true,
                'post__post-score_color_red': post.voteScore < 0
              })}>
                {post.voteScore}
                </span>
              <i className='fa fa-thumbs-o-up post__post-up-hand'
                 title='Vote positive'
                 onClick={() => {
                   this.votePost(postId, VOTE_POSITIVE)
                 }}
              />
              <i className='fa fa-thumbs-o-down post__post-down-hand'
                 title='Vote negative'
                 onClick={() => {
                   this.votePost(postId, VOTE_NEGATIVE)
                 }}
              />
            </div>
          </div>
        </div>
        <CommentEditable className='post__comments-new-comment'
                         saveChanges={this.newComment.bind(this, postId)}
        />
        <CommentsList className='post__comments-container'
                      comments={postComments}
                      votePositive={this.voteComment.bind(this, VOTE_POSITIVE)}
                      voteNegative={this.voteComment.bind(this, VOTE_NEGATIVE)}
                      editComment={this.editComment.bind(this)}
                      deleteComment={this.deleteComment.bind(this)}
        />
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

export default connect(mapStateToProps, {
  showModalAction,
  deleteComment,
  deletePost,
  editComment,
  addComment,
  editPost,
  votePost,
  voteComment,
  hideModalAction
})(Post)
