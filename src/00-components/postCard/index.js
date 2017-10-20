import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownOption from '../dropdownMenu/DropdownOption';
import DropdownSeparator from '../dropdownMenu/DropdownSeparator';
import reactLogo from '../../assets/images/react-logo.png';
import reduxLogo from '../../assets/images/redux-logo.png';
import udacityLogo from '../../assets/images/udacity-logo.png';
import './postCard.css';

export default class PostCard extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    numberOfComments: PropTypes.number.isRequired,
    votePositive: PropTypes.func.isRequired,
    voteNegative: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  static defaultProps = {
    id: '',
    timestamp: 0,
    title: '',
    body: '',
    author: '',
    category: '',
    voteScore: 0,
    numberOfComments: 0,
    votePositive: () => {
    },
    voteNegative: () => {
    },
    deletePost: () => {
    }
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
    const {id, timestamp, title, body, author, category, voteScore, numberOfComments, votePositive, voteNegative, deletePost} = this.props;
    const formattedDate = this.convertDate(timestamp);
    const logos = {
      react: reactLogo,
      redux: reduxLogo,
      udacity: udacityLogo
    };
    return (
      <div className='post-card-container'>
        <div className='post-card-header'>
          <span className='post-card-header__title'>{title}</span>
          <div className='post-card-header__options'>
            <DropdownMenu title='' iconClass='fa fa-cog'>
              <DropdownOption title="Edit post"
                              iconClass="fa fa-edit"
              />
              <DropdownSeparator/>
              <DropdownOption title="Delete post"
                              iconClass="fa fa-trash"
                              onClick={() => {
                                deletePost(id)
                              }}
              />
            </DropdownMenu>
          </div>
        </div>
        <div className='post-card-subheader'>
          <img className='post-card-subheader__image'
               alt={`${category}-logo`}
               src={logos[category]}
          />
          <span className={`post-card-subheader__title post-card-subheader__title_color_${category}`}>{category}</span>
        </div>
        <div className='post-card-body'>
          <div className='post-card-text-content'>
            <span className='post-card-text-content__text'>{body}</span>
          </div>
          <div className='post-card-score-content'>
            <div className='post-card-score-content__left'>
              <i className='fa fa-thumbs-o-up post-card-score-content__left-hand'
                 title='Vote positive'
                 onClick={() => {
                   votePositive(id)
                 }}
              />
              <div className="half-circle-left"/>
            </div>
            <span className={ClassNames({
              'post-card-score-content__score-number': true,
              'post-card-score-content__score-number_color_red': voteScore < 0
            })}
            >
              {voteScore}
            </span>
            <div className='post-card-score-content__right'>
              <div className="half-circle-right"/>
              <i className='fa fa-thumbs-o-down post-card-score-content__right-hand'
                 title='Vote negative'
                 onClick={() => {
                   voteNegative(id)
                 }}
              />
            </div>
          </div>
          <div className='post-card-footer-content'>
            <div className='post-card-footer-content__left'>
              <span className='post-card-footer-content__date'><i className='fa fa-calendar-o'/> {formattedDate}</span>
              <span className='post-card-footer-content__author'>
                <i className='fa fa-user post-card-footer-content__author-icon'/>{author}
              </span>
            </div>
            <div className='post-card-footer-content__right'>
              <span className='post-card-footer-content__comments'>
                {numberOfComments} <i className='fa fa-comments'/>
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
