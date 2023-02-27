import { createContext, useContext, useReducer } from "react";
import {
  CLOSE_DOCPACK_MODAL,
  CLOSE_PROHIBIT_MODAL,
  CLOSE_PROTECT_MODAL,
  OPEN_DOCPACK_MODAL,
  OPEN_PROHIBIT_MODAL,
  OPEN_PROTECT_MODAL,
} from "../actions";
import modal_reducer from "../reducers/modal_reducer";

const initialState = {
  protectModalOpen: false,
  prohibitModalOpen: false,
  docPackModalOpen: false,
};

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modal_reducer, initialState);

  const openProtectModal = () => {
    dispatch({ type: OPEN_PROTECT_MODAL });
  };
  const closeProtectModal = () => {
    dispatch({ type: CLOSE_PROTECT_MODAL });
  };

  const openProhibitModal = () => {
    dispatch({ type: OPEN_PROHIBIT_MODAL });
  };
  const closeProhibitModal = () => {
    dispatch({ type: CLOSE_PROHIBIT_MODAL });
  };

  const openDocPackModal = () => {
    dispatch({ type: OPEN_DOCPACK_MODAL });
  };
  const closeDocPackModal = () => {
    dispatch({ type: CLOSE_DOCPACK_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,
        openProtectModal,
        openProhibitModal,
        openDocPackModal,
        closeProhibitModal,
        closeProtectModal,
        closeDocPackModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
