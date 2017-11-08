import * as types from './actionTypes';
import * as CategoriesService from '../../03-service/categories';

// ------------------------------ ACTIONS  ------------------------------

function setAllCategoriesAction(categories) {
  return {
    type: types.SET_ALL_CATEGORIES,
    categories
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------

export function getAllCategories() {
  return dispatch => {
    CategoriesService.getAllCategories(({categories}) => {
      dispatch(setAllCategoriesAction(categories))
    })
  }
}

// ------------------------------ FUNCTIONS  ------------------------------

