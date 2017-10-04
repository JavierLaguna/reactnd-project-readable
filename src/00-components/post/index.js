import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './post.css';

export default class Post extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
  };

  static defaultProps = {
    id: '',
    timestamp: '',
    title: '',
    body: '',
    author: '',
    category: '',
    voteScore: 0
  };

  state = {};

  render() {
    const {id, timestamp, title, body, author, category, voteScore} = this.props;
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
        </div>
      </div>
    )
  }
}
