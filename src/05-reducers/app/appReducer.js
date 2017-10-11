import appInitialState from '../00-initialState/app/appInitialState';
import * as modalTypes from '../../constants/app/modal';

export default function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case modalTypes.SHOW_MODAL :
      return {
        ...state,
        modal: {
          modalType: action.modalType,
          containerProps: action.containerProps
        }
      };
    case modalTypes.HIDE_MODAL :
      return {
        ...state,
        modal: {
          modalType: null,
          containerProps: {}
        }
      };
    default:
      return state;
  }
}
