import {generateUUID} from '../../02-actions/posts/postsActions';

// ACTIONS

export const ADD_POST = 'ADD_POST';
export const SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_POST = 'SET_POST';
export const DELETE_POST = 'DELETE_POST';

// OTHERS

export const POST_DEFAULT_VALUES = {
  id: () => generateUUID(),
  timestamp: () => Date.now(),
  voteScore: 1,
  deleted: false
};

export const VOTE_POSITIVE = 'upVote';
export const VOTE_NEGATIVE = 'downVote';
