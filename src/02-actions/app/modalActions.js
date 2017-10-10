import * as types from '../../constants/app/modal'

// ------------------------------ ACTIONS  ------------------------------

export function showModalAction(modalType, containerProps = {}) {
  return {
    type: types.SHOW_MODAL,
    modalType,
    containerProps
  }
}

export function hideModalAction() {
  return {
    type: types.HIDE_MODAL
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------


// ------------------------------ FUNCTIONS  ------------------------------
