import * as types from '../../constants/posts/posts';
import * as PostsService from '../../03-service/posts';

// ------------------------------ ACTIONS  ------------------------------

export function addPostAction(newPost) {
  return {
    type: types.ADD_POST,
    newPost
  }
}

export function setAllPostAction(posts) {
  return {
    type: types.SET_ALL_POSTS,
    posts
  }
}

export function setPostAction(post) {
  return {
    type: types.SET_POST,
    post
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------

export function getAllCategories() {
  return dispatch => {
    PostsService.getAllPosts((posts) => {
      dispatch(setAllPostAction(posts))
    })
  }
}

export function votePost(postId, vote) {
  return dispatch => {
    PostsService.votePost(postId, vote, (data) => {
      dispatch(setPostAction(data))
    })
  }
}

// ------------------------------ FUNCTIONS  ------------------------------

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
