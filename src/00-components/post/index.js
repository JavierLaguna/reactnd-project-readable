import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Post extends PureComponent {
  static propTypes = {
    saveChanges: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  };

  static defaultProps = {
    saveChanges: () => {
    },
    categories: []
  };

  state = {
    title: '',
    author: '',
    category: '',
    body: ''
  };

  onChangeField(value, field) {
    this.setState({
      [field]: value
    });
  }

  onInputChange(event) {
    this.onChangeField(event.target.value, event.target.name);
  }

  saveChanges() {
    const {title, author, category, body} = this.state;
    this.props.saveChanges({
      title,
      author,
      category,
      body
    });
  }

  render() {
    const {title, author, category, body} = this.state;
    const {categories} = this.props;

    return (  // TODO FORM TO CHECK VALIDITY??
      <div className='post-container'>
        <div className='field'>
          <label className='field__label'>Title</label>
          <input className='field__input'
                 name='title'
                 value={title}
                 onChange={this.onInputChange.bind(this)}
          />
        </div>
        <div className='field'>
          <label className='field__label'>Author</label>
          <input className='field__input'
                 name='author'
                 value={author}
                 onChange={this.onInputChange.bind(this)}
          />
        </div>
        <div className='field'>
          <label className='field__label'>Category</label>
          <select>
            {categories.map((option, index) => <option key={index} value={option.name}>{option.name}</option>)}
          </select>
          {/*<input className='field__input'*/}
                 {/*name='category'*/}
                 {/*value={category}*/}
                 {/*onChange={this.onInputChange.bind(this)}*/}
          {/*/>*/}
        </div>
        <div className='field'>
          <label className='field__label'>Body</label>
          <input className='field__input'
                 name='body'
                 value={body}
                 onChange={this.onInputChange.bind(this)}
          />
        </div>
        <div className='post-footer'>
          <button className='post-footer__button' onClick={this.saveChanges.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}
