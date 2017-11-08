import categoriesInitialState from '../00-initialState/categories/categoriesInitialState';
import * as types from '../../02-actions/categories/actionTypes';

export default function commentsReducer(state = categoriesInitialState, action) {
  switch (action.type) {
    case types.SET_ALL_CATEGORIES :
      return {
        ...state,
        categoriesList: action.categories
      };
    default:
      return state;
  }
}
