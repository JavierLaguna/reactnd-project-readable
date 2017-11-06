import {executeServiceCall, executeServiceCallWithData} from '../core';

export function getCommentsByPost(postId, callback, error) {
  executeServiceCall(`/posts/${postId}/comments`, callback, error);
}

export function voteComment(commentId, vote, callback, error) {
  const data = {option: vote};
  executeServiceCallWithData(`/comments/${commentId}`, data, callback, error);
}

export function addComment(comment, callback, error) {
  executeServiceCallWithData('/comments', comment, callback, error);
}
