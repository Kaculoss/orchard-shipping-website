import {
  CLOSE_DOCPACK_MODAL,
  CLOSE_PROHIBIT_MODAL,
  CLOSE_PROTECT_MODAL,
  OPEN_DOCPACK_MODAL,
  OPEN_PROHIBIT_MODAL,
  OPEN_PROTECT_MODAL,
} from "../actions";

const modal_reducer = (state, action) => {
  if (action.type === OPEN_PROTECT_MODAL) {
    return { ...state, protectModalOpen: true };
  }
  if (action.type === CLOSE_PROTECT_MODAL) {
    return { ...state, protectModalOpen: false };
  }

  if (action.type === OPEN_PROHIBIT_MODAL) {
    return { ...state, prohibitModalOpen: true };
  }
  if (action.type === CLOSE_PROHIBIT_MODAL) {
    return { ...state, prohibitModalOpen: false };
  }

  if (action.type === OPEN_DOCPACK_MODAL) {
    return { ...state, docPackModalOpen: true };
  }
  if (action.type === CLOSE_DOCPACK_MODAL) {
    return { ...state, docPackModalOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default modal_reducer;
