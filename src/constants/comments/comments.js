import {generateUUID} from '../../02-actions/posts/postsActions';

export const COMMENT_DEFAULT_VALUES = {
  id: () => generateUUID(),
  timestamp: () => Date.now(),
  voteScore: 1,
  deleted: false,
  parentDeleted: false
};
