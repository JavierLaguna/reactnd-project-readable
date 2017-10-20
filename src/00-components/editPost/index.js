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
    const {categories, saveChanges, post} = this.props;

    return (
      <div className='edit-post-container'>
        <div className='edit-post-container__header'>Edit Post</div>
        <Post categories={categories}
              saveChanges={saveChanges}
              post={post}
              disabledAuthor
              disabledCategory
        />
      </div>
    )
  }
}
