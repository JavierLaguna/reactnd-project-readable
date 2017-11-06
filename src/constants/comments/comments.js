import {generateUUID} from '../../02-actions/posts/postsActions';

// ACTIONS

export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_COMMENT = 'SET_COMMENT';

// OTHERS

export const COMMENT_DEFAULT_VALUES = {
  id: () => generateUUID(),
  timestamp: () => Date.now(),
  voteScore: 1,
  deleted: false,
  parentDeleted: false
};
