import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './newPost.css';

export default class Post extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    onClick: ()=>{}
  };

  state = {};

  render() {
    const {onClick} = this.props;
    return (
      <div className='new-post-container' onClick={onClick}>
        <i className='fa fa-plus new-post-container__plus'/>
      </div>
    )
  }
}
