import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {convertDate} from '../../utils/dates';
import ClassNames from 'classnames';
import {VOTE_NEGATIVE, VOTE_POSITIVE} from '../../constants/posts/posts';
import './comment.css';

export default class Comment extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.string.isRequired,
    deleted: PropTypes.string.isRequired,
    parentDeleted: PropTypes.string.isRequired
  };

  static defaultProps = {
    id: '',
    parentId: '',
    timestamp: '',
    body: '',
    author: '',
    voteScore: '',
    deleted: '',
    parentDeleted: ''
  };

  state = {};

  editComment(postId) { //TODO
    // let post = this.props.postsList.filter((post) => post.id === postId);
    // post = post[0];
    // const containerProps = {
    //   saveChanges: (editedPost) => {
    //     editedPost = {
    //       ...post,
    //       ...editedPost
    //     };
    //     this.props.editPost(editedPost);
    //     this.props.hideModalAction();
    //   },
    //   categories: this.props.categories,
    //   post
    // };
    // this.props.showModalAction(EDIT_POST_MODAL, containerProps);
  }

  deleteComment(postId) {//TODO
    debugger //TODO GO BACK
    // this.props.deleteComment(postId);
  }

  votePositive(postId) {//TODO
    this.votePost(postId, VOTE_POSITIVE);
  }

  voteNegative(postId) {//TODO
    this.votePost(postId, VOTE_NEGATIVE);
  }

  votePost(postId, vote) {//TODO
    this.props.votePost(postId, vote);
  }

  render() {
    const {
      id,
      parentId,
      timestamp,
      body,
      author,
      voteScore,
      deleted,
      parentDeleted
    } = this.props;

    return (
      <div className='comment'>
        <div className='comment__content'>
          <div className='comment__header'>
            <div className='comment__title'>
              <span></span>
            </div>
            <div className='comment__author-date'>
              <span><i className='fa fa-user'/> {`${author}, ${convertDate(timestamp)}`}</span>
            </div>
          </div>
          <div className='comment__body'>
            <div className='comment__body-content'>
              "{body}"
            </div>
            <div className='comment__body-options'>
              <span className='comment__body-option' onClick={this.editComment.bind(this, id)}>
                <i className='fa fa-edit'/>Edit
              </span>
              <span className='comment__body-option' onClick={this.deleteComment.bind(this, id)}>
                <i className='fa fa-trash'/>Delete
              </span>
            </div>
          </div>
          <div className='comment__footer'>
            <div className='comment__votes'>
              <span className={ClassNames({
                'comment__score': true,
                'comment__score_color_red': voteScore < 0
              })}>
                {voteScore}
                </span>
              <i className='fa fa-thumbs-o-up comment__up-hand'
                 title='Vote positive'
                 onClick={() => {
                   this.votePositive(id)
                 }}
              />
              <i className='fa fa-thumbs-o-down comment__down-hand'
                 title='Vote negative'
                 onClick={() => {
                   this.voteNegative(id)
                 }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
