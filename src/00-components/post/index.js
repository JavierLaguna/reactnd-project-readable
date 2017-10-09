import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './post.css';

export default class Post extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    numberOfComments: PropTypes.number.isRequired
  };

  static defaultProps = {
    id: '',
    timestamp: 0,
    title: '',
    body: '',
    author: '',
    category: '',
    voteScore: 0,
    numberOfComments: 0
  };

  state = {};

  convertDate(inputFormat) {
    function pad(s) {
      return (s < 10) ? '0' + s : s;
    }

    const d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

  render() {
    const {id, timestamp, title, body, author, category, voteScore, numberOfComments} = this.props;
    const formattedDate = this.convertDate(timestamp);
    return (
      <div className='post-container'>
        <div className='post-header'>
          <span className='post-header__title'>{title}</span>
        </div>
        <div className='post-body'>
          <div className='post-text-content'>
            <span className='post-text-content__text'>{body}</span>
          </div>
          <div className='post-score-content'>
            <div className='post-score-content__left'>
              <i className='fa fa-thumbs-o-up post-score-content__left-hand' title='Vote positive'/>
              <div className="half-circle-left"/>
            </div>
            <span className='post-score-content__score-number'>{voteScore}</span>
            <div className='post-score-content__right'>
              <div className="half-circle-right"/>
              <i className='fa fa-thumbs-o-down post-score-content__right-hand' title='Vote negative'/>
            </div>
          </div>
          <div className='post-footer-content'>
            <div className='post-footer-content__left'>
              <span className='post-footer-content__date'><i className='fa fa-calendar-o'/> {formattedDate}</span>
              <span className='post-footer-content__author'>
                <i className='fa fa-user post-footer-content__author-icon'/>{author}
              </span>
            </div>
            <div className='post-footer-content__right'>
              <span className='post-footer-content__comments'>
                {numberOfComments} <i className='fa fa-comments'/>
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
