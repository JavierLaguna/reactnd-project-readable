import * as types from '../../constants/posts/posts';
import * as PostsService from '../../03-service/posts';
import * as CommentsActions from '../comments/commentsActions';

// ------------------------------ ACTIONS  ------------------------------

function addPostAction(newPost) {
  return {
    type: types.ADD_POST,
    newPost
  }
}

function setAllPostAction(posts) {
  return {
    type: types.SET_ALL_POSTS,
    posts
  }
}

function setPostAction(post) {
  return {
    type: types.SET_POST,
    post
  }
}

function deletePostAction(postId) {
  return {
    type: types.DELETE_POST,
    postId
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------

export function getAllPosts() {
  return dispatch => {
    PostsService.getAllPosts((posts) => {
      dispatch(setAllPostAction(posts));
      // eslint-disable-next-line
      posts.map((post) => {
        dispatch(CommentsActions.getCommentsByPost(post.id));
      });
    });
  }
}

export function votePost(postId, vote) {
  return dispatch => {
    PostsService.votePost(postId, vote, (data) => {
      dispatch(setPostAction(data))
    });
  }
}

export function addPost(newPost) {
  return dispatch => {
    PostsService.addPost(newPost, (data) => {
      dispatch(addPostAction(newPost))
    });
  }
}

export function deletePost(postId) {
  return dispatch => {
    PostsService.deletePost(postId, (data) => {
      dispatch(deletePostAction(postId))
    });
  }
}

export function editPost(post) {
  return dispatch => {
    PostsService.editPost(post, (data) => {
      dispatch(setPostAction(data))
    });
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
