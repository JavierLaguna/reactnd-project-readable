import * as types from '../../constants/comments/comments';
import * as CommentsService from '../../03-service/comments';

// ------------------------------ ACTIONS  ------------------------------

function addCommentAction(comment) {
  return {
    type: types.ADD_COMMENT,
    comment
  }
}

function setCommentAction(comment) {
  return {
    type: types.SET_COMMENT,
    comment
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------

export function getCommentsByPost(postId) {
  return dispatch => {
    CommentsService.getCommentsByPost(postId, (comments) => {
      comments.map((comment) => {
        dispatch(addCommentAction(comment))
      });
    });
  }
}

export function voteComment(commentId, vote) {
  return dispatch => {
    CommentsService.voteComment(commentId, vote, (comment) => {
      dispatch(setCommentAction(comment))
    });
  }
}

export function addComment(comment) {
  return dispatch => {
    CommentsService.addComment(comment, (newComment) => {
      dispatch(addCommentAction(newComment))
    });
  }
}

export function editComment(comment) {
  return dispatch => {
    CommentsService.editComment(comment, (editedComment) => {
      dispatch(setCommentAction(editedComment))
    });
  }
}

export function deleteComment(comment) {
  return dispatch => {
    CommentsService.deleteComment(comment, (deletedComment) => {
      dispatch(setCommentAction(deletedComment))
    });
  }
}

// ------------------------------ FUNCTIONS  ------------------------------
