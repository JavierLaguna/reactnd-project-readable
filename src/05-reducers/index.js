import {combineReducers} from 'redux';
import appReducer from './app/appReducer';
import postsReducer from './posts/postsReducer';
import commentsReducer from './comments/commentsReducer';
import categoriesReducer from './categories/categoriesReducer';

export default combineReducers({
  app: appReducer,
  posts: postsReducer,
  comments: commentsReducer,
  categories: categoriesReducer
});
