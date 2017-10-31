import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';

export default class CommentsList extends Component {

  static propTypes = {
    className: PropTypes.string,
    comments: PropTypes.array.isRequired
  };

  static defaultProps = {
    className: '',
    comments: []
  };

  state = {};

  render() {
    const {className, comments} = this.props;
    
    return (
      <div className={className}>
        {comments.map((comment, index) => (
          <Comment key={index}
                   id={comment.id}
                   parentId={comment.parentId}
                   voteScore={comment.voteScore}
                   author={comment.author}
                   deleted={comment.deleted}
                   timestamp={comment.timestamp}
                   body={comment.body}
                   parentDeleted={comment.parentDeleted}
          />
        ))}
      </div>
    )
  }
}
