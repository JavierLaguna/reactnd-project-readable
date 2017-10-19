import {executeServiceCall} from '../core';

export function getAllPosts(callback, error) {
  executeServiceCall('/posts', callback, error);
}
