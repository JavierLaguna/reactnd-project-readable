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
      comments.map((comment)=>{
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

// ------------------------------ FUNCTIONS  ------------------------------