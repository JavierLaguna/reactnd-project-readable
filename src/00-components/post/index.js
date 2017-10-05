import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';
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
            <span className=''>{voteScore}</span>
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
