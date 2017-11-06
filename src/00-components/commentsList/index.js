import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import CommentEditable from '../commentEditable';

export default class CommentsList extends Component {

  static propTypes = {
    className: PropTypes.string,
    comments: PropTypes.array.isRequired,
    votePositive: PropTypes.func.isRequired,
    voteNegative: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    comments: [],
    votePositive: () => {
    },
    voteNegative: () => {
    },
    editComment: () => {
    }
  };

  state = {
    commentEditable: ''
  };

  editComment(commentId) {
    this.setState({commentEditable: commentId});
  }

  saveComment(comment, commentChanges) {
    const editedComment = {
      ...comment,
      ...commentChanges
    };
    this.props.editComment(editedComment);
    this.setState({commentEditable: ''});
  }

  render() {
    const {className, comments, votePositive, voteNegative} = this.props;
    const {commentEditable} = this.state;

    return (
      <div className={className}>
        {comments.map((comment, index) => {
          if (commentEditable === comment.id) {
            return (
              <CommentEditable className=''
                               comment={comment}
                               saveChanges={this.saveComment.bind(this, comment)}
              />
            )
          }
          return (
            <Comment key={index}
                     id={comment.id}
                     parentId={comment.parentId}
                     voteScore={comment.voteScore}
                     author={comment.author}
                     deleted={comment.deleted}
                     timestamp={comment.timestamp}
                     body={comment.body}
                     parentDeleted={comment.parentDeleted}
                     voteNegative={voteNegative}
                     votePositive={votePositive}
                     editComment={this.editComment.bind(this)}
            />
          )
        })}
      </div>
    )
  }
}
