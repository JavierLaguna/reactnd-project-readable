import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Post from '../post';
import './index.css';

export default class CreatePost extends PureComponent {
  static propTypes = {
    saveChanges: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  };

  static defaultProps = {
    saveChanges: () => {
    },
    categories: []
  };

  state = {};

  render() {
    const {categories, saveChanges} = this.props;

    return (
      <div className='create-post-container'>
        <div className='create-post-container__header'>Create New Post</div>
        <Post categories={categories} saveChanges={saveChanges}/>
      </div>
    )
  }
}
