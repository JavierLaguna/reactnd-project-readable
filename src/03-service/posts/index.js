import {executeServiceCall, executeServiceCallWithData} from '../core';

export function getAllPosts(callback, error) {
  executeServiceCall('/posts', callback, error);
}

export function votePost(postId, vote, callback, error) {
  const data = {option: vote};
  executeServiceCallWithData(`/posts/${postId}`, data, callback, error);
}
