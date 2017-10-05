import {combineReducers} from 'redux';
import appReducer from './app/appReducer';
import postsReducer from './posts/postsReducer';

export default combineReducers({
  app: appReducer,
  posts: postsReducer
});
