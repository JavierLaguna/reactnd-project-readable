import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isEmpty as _isEmpty} from 'lodash';
import './commentEditable.css';

export default class CommentEditable extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    comment: PropTypes.object,
    saveChanges: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    comment: {},
    saveChanges: () => {
    }
  };

  state = {
    author: '',
    body: '',
    textButton: 'Add Comment',
    disabledAuthor: false
  };

  componentWillMount() {
    if (!_isEmpty(this.props.comment)) {
      this.setState({
        author: this.props.comment.author,
        body: this.props.comment.body,
        textButton: 'Save Changes',
        disabledAuthor: true
      });
    }
  }

  saveChanges(event) {
    event.preventDefault();
    const {author, body} = this.state;
    this.props.saveChanges({
      author,
      body
    });
    this.setState({
      author: '',
      body: ''
    });
  }

  onChangeField(value, field) {
    this.setState({
      [field]: value
    });
  }

  onInputChange(event) {
    this.onChangeField(event.target.value, event.target.name);
  }

  render() {
    const {body, author, textButton, disabledAuthor} = this.state;
    const {className} = this.props;

    return (
      <div className={`${className} comment-editable`}>
        <form onSubmit={this.saveChanges.bind(this)} autoComplete="on">
          <div className='field'>
            <label className='field__label'>Author</label>
            <input className='field__input'
                   name='author'
                   value={author}
                   onChange={this.onInputChange.bind(this)}
                   required
                   disabled={disabledAuthor}
            />
          </div>
          <div className='field'>
            <label className='field__label'>Body</label>
            <textarea className='field__text-area'
                      name='body'
                      value={body}
                      onChange={this.onInputChange.bind(this)}
                      required
            />
          </div>
          <div className='comment-editable-footer'>
            <button className='comment-editable-footer__button' type='submit'>{textButton}</button>
          </div>
        </form>
      </div>
    )
  }
}
