import {executeServiceCall} from '../core';

export function getAllCategories(callback, error) {
  executeServiceCall('/categories', callback, error);
}
