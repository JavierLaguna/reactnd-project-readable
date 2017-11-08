import {generateUUID} from '../../02-actions/posts/postsActions';

export const POST_DEFAULT_VALUES = {
  id: () => generateUUID(),
  timestamp: () => Date.now(),
  voteScore: 1,
  deleted: false
};

export const VOTE_POSITIVE = 'upVote';
export const VOTE_NEGATIVE = 'downVote';
