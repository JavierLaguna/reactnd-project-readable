import * as types from '../../constants/posts/posts'

// ------------------------------ ACTIONS  ------------------------------

export function addPostAction(newPost) {
  return {
    type: types.ADD_POST,
    newPost
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------


// ------------------------------ FUNCTIONS  ------------------------------

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}