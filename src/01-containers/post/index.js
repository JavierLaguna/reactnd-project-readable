import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ClassNames from 'classnames';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import CategoryLogo from '../../00-components/categoryLogo';
import {convertDate} from '../../utils/dates';
import {votePost, deletePost, editPost} from '../../02-actions/posts/postsActions';
import {EDIT_POST_MODAL} from '../../constants/app/modal';
import {VOTE_NEGATIVE, VOTE_POSITIVE} from '../../constants/posts/posts';
import './index.css';

class Post extends PureComponent {
  votePositive(postId) {
    this.votePost(postId, VOTE_POSITIVE);
  }

  voteNegative(postId) {
    this.votePost(postId, VOTE_NEGATIVE);
  }

  votePost(postId, vote) {
    this.props.votePost(postId, vote);
  }

  render() {
    const {postsList, comments, match} = this.props;
    const {postId} = match.params;
    const post = postsList.length !== 0 ? postsList.filter((post) => {
      return postId === post.id;
    })[0] : {};
    const postComments = comments[postId] || [];

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
              <span className='post__body-option'><i className='fa fa-edit'/>Edit</span>
              <span className='post__body-option'><i className='fa fa-trash'/>Delete</span>
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
                   this.votePositive(postId)
                 }}
              />
              <i className='fa fa-thumbs-o-down post__post-down-hand'
                 title='Vote negative'
                 onClick={() => {
                   this.voteNegative(postId)
                 }}
              />
            </div>
          </div>
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
    editPost: (post) => dispatch(editPost(post)),
    votePost: (postId, vote) => dispatch(votePost(postId, vote)),
    hideModalAction: () => dispatch(hideModalAction()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)
