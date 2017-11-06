import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './commentEditable.css';

export default class CommentEditable extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    saveChanges: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    body: '',
    author: '',
    saveChanges: () => {
    }
  };

  state = {
    author: '',
    body: ''
  };

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
    const {body, author} = this.state;
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
            <button className='comment-editable-footer__button' type='submit'>Add Comment</button>
          </div>
        </form>
      </div>
    )
  }
}
