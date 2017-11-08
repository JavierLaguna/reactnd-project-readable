import appInitialState from '../00-initialState/app/appInitialState';
import * as types from '../../02-actions/app/actionTypes';

export default function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL :
      return {
        ...state,
        modal: {
          modalType: action.modalType,
          containerProps: action.containerProps
        }
      };
    case types.HIDE_MODAL :
      return {
        ...state,
        modal: {
          modalType: null,
          containerProps: {}
        }
      };
    case types.SET_POST_ORDER :
      return {
        ...state,
        postOrder: {
          field: action.field,
          type: action.orderType
        }
      };
    default:
      return state;
  }
}
