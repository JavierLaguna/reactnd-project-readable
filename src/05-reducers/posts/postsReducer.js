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
      return {
        ...state,
        postsList: state.postsList.map((post) => {
          if (post.id === action.post.id) {
            return action.post;
          } else {
            return post;
          }
        })
      };
    case types.DELETE_POST :
      return {
        ...state,
        postsList: state.postsList.map((post) => {
          if (post.id === action.postId) {
            post.deleted = true;
          }
          return post;
        })
      };
    default:
      return state;
  }
}
