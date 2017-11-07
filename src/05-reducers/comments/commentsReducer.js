import commentsInitialState from '../00-initialState/comments/commentsInitialState';
import * as types from '../../constants/comments/comments';

export default function commentsReducer(state = commentsInitialState, action) {
  switch (action.type) {
    case types.ADD_COMMENT :
      const commentsList = {...state.commentsList};
      if (commentsList[action.comment.parentId]) {
        commentsList[action.comment.parentId].push(action.comment);
      } else {
        commentsList[action.comment.parentId] = [action.comment];
      }
      return {
        ...state,
        commentsList
      };
    case types.SET_COMMENT :
      let comments = {...state.commentsList};
      comments[action.comment.parentId] = comments[action.comment.parentId].map((comment) => {

        if (comment.id === action.comment.id) {
          return action.comment;
        } else {
          return comment;
        }
      });
      return {
        ...state,
        commentsList: comments
      };
    default:
      return state;
  }
}
