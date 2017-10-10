import * as types from '../../constants/app/modal'

// ------------------------------ ACTIONS  ------------------------------

export function showModal(modalType, containerProps = {}) {
  return {
    type: types.SHOW_MODAL,
    modalType: modalType,
    containerProps: containerProps
  }
}

export function hideModal() {
  return {
    type: types.HIDE_MODAL
  }
}

// ------------------------------ ASYNC ACTIONS  ------------------------------


// ------------------------------ FUNCTIONS  ------------------------------
