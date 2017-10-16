import {generateUUID} from '../../02-actions/posts/postsActions';

// ACTIONS

export const ADD_POST = 'ADD_POST';

// OTHERS

export const POST_DEFAULT_VALUES = {
  id: () => generateUUID(),
  timestamp: () => Date.now(),
  voteScore: 1,
  deleted: false
};
