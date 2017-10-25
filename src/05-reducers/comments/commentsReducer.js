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
    default:
      return state;
  }
}
