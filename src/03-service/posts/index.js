import {executeServiceCall, executeServiceCallWithData} from '../core';

export function getAllPosts(callback, error) {
  executeServiceCall('/posts', callback, error);
}

export function votePost(postId, vote, callback, error) {
  const data = {option: vote};
  executeServiceCallWithData(`/posts/${postId}`, data, callback, error);
}

export function addPost(newPost, callback, error) {
  const data = {
    id: newPost.id,
    timestamp: newPost.timestamp,
    title: newPost.title,
    body: newPost.body,
    author: newPost.author,
    category: newPost.category
  };
  executeServiceCallWithData(`/posts`, data, callback, error);
}

export function deletePost(postId, callback, error) {
  executeServiceCall(`/posts/${postId}`, callback, error, 'DELETE');
}

export function editPost(post, callback, error) {
  const data = {
    title: post.title,
    body: post.body
  };
  executeServiceCallWithData(`/posts/${post.id}`, data, callback, error, 'PUT');
}
