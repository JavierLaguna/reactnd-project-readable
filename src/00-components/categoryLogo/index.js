import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import reactLogo from '../../assets/images/react-logo.png';
import reduxLogo from '../../assets/images/redux-logo.png';
import udacityLogo from '../../assets/images/udacity-logo.png';
import './categoryLogo.css';

export default class CategoryLogo extends PureComponent {

  static propTypes = {
    category: PropTypes.string.isRequired
  };

  static defaultProps = {
    category: ''
  };

  state = {};

  render() {
    const {category} = this.props;
    const logos = {
      react: reactLogo,
      redux: reduxLogo,
      udacity: udacityLogo
    };
    return (
      <div className='category'>
        <img className='category__image'
             alt={`${category}-logo`}
             src={logos[category]}
        />
        <span className={`category__title category__title_color_${category}`}>{category}</span>
      </div>
    )
  }
}
