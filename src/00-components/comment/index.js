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
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    parentDeleted: PropTypes.bool.isRequired,
    votePositive: PropTypes.func.isRequired,
    voteNegative: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired
  };

  static defaultProps = {
    id: '',
    parentId: '',
    timestamp: 0,
    body: '',
    author: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
    votePositive: () => {
    },
    voteNegative: () => {
    },
    editComment: () => {
    },
    deleteComment: () => {
    }
  };

  state = {};

  editComment(commentId) {
    this.props.editComment(commentId);
  }

  deleteComment(commentId) {
    this.props.deleteComment(commentId);
  }

  votePositive() {
    this.props.votePositive(this.props.id);
  }

  voteNegative() {
    this.props.voteNegative(this.props.id);
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
                <i className='fa fa-edit'/>
              </span>
              <span className='comment__body-option' onClick={this.deleteComment.bind(this, id)}>
                <i className='fa fa-trash'/>
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
