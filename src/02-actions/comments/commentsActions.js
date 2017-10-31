import * as types from '../../constants/comments/comments';
import * as CommentsService from '../../03-service/comments';

// ------------------------------ ACTIONS  ------------------------------

function addCommentAction(comment) {
  return {
    type: types.ADD_COMMENT,
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

// ------------------------------ FUNCTIONS  ------------------------------
