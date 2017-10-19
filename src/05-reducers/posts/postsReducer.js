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
    case types.SET_ALL_POSTS :
      return {
        ...state,
        postsList: action.posts
      };
    case types.SET_POST :
      const posts = state.postsList.map((post) => {
        if (post.id === action.post.id) {
          return action.post;
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsList: posts
      };
    default:
      return state;
  }
}
