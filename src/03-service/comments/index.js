import {executeServiceCall, executeServiceCallWithData} from '../core';

export function getCommentsByPost(postId, callback, error) {
  executeServiceCall(`/posts/${postId}/comments`, callback, error);
}
