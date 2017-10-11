import postsInitialState from '../00-initialState/posts/postsInitialState';
import * as types from '../../constants/posts/posts';

export default function postsReducer(state = postsInitialState, action) {
  switch (action.type) {
    case types.ADD_POST :
      let postsList = [...state.postsList];
      postsList.push(action.newPost);
      return {
        ...state,
        postsList
      };
    default:
      return state;
  }
}
