import * as types from '../../constants/app/postOrder'

// ------------------------------ ACTIONS  ------------------------------

export function setPostOrderAction(field, orderType) {
  return {
    type: types.SET_POST_ORDER,
    field,
    orderType
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------


// ------------------------------ FUNCTIONS  ------------------------------
