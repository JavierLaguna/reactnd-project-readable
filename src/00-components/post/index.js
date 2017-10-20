import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isEmpty as _isEmpty} from 'lodash';
import './index.css';

export default class Post extends PureComponent {
  static propTypes = {
    saveChanges: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    post: PropTypes.object,
    disabledTitle: PropTypes.bool,
    disabledAuthor: PropTypes.bool,
    disabledCategory: PropTypes.bool,
    disabledBody: PropTypes.bool
  };

  static defaultProps = {
    saveChanges: () => {
    },
    categories: [],
    post: {},
    disabledTitle: false,
    disabledAuthor: false,
    disabledCategory: false,
    disabledBody: false
  };

  state = {
    title: '',
    author: '',
    category: '',
    body: ''
  };

  componentWillMount() {
    if (!_isEmpty(this.props.post)) {
      this.setState({
        title: this.props.post.title,
        author: this.props.post.author,
        category: this.props.post.category,
        body: this.props.post.body
      });
    }
  }

  onChangeField(value, field) {
    this.setState({
      [field]: value
    });
  }

  onInputChange(event) {
    this.onChangeField(event.target.value, event.target.name);
  }

  saveChanges(event) {
    event.preventDefault();
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
    const {categories, disabledTitle, disabledAuthor, disabledCategory, disabledBody} = this.props;

    return (
      <div className='post-container'>
        <form className="execute-order-form" onSubmit={this.saveChanges.bind(this)} autoComplete="on">
          <div className='field'>
            <label className='field__label'>Title</label>
            <input className='field__input'
                   name='title'
                   value={title}
                   onChange={this.onInputChange.bind(this)}
                   disabled={disabledTitle}
                   required
            />
          </div>
          <div className='field'>
            <label className='field__label'>Author</label>
            <input className='field__input'
                   name='author'
                   value={author}
                   onChange={this.onInputChange.bind(this)}
                   disabled={disabledAuthor}
                   required
            />
          </div>
          <div className='field'>
            <label className='field__label'>Category</label>
            <select className='field__input'
                    name='category'
                    value={category}
                    onChange={this.onInputChange.bind(this)}
                    disabled={categories.length === 0 || disabledCategory}
                    required
            >
              <option value='' disabled>Categories...</option>
              {categories.map((option, index) => (
                <option key={index} value={option.name}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className='field'>
            <label className='field__label'>Body</label>
            <textarea className='field__text-area'
                      name='body'
                      value={body}
                      onChange={this.onInputChange.bind(this)}
                      disabled={disabledBody}
                      required
            />
          </div>
          <div className='post-footer'>
            <button className='post-footer__button' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
