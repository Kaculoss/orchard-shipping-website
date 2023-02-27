import { createContext, useContext, useReducer } from "react";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
import web_reducer from "../reducers/web_reducer";

const initialState = {
  isSidebarOpen: false,
};

const WebContext = createContext();

export const WebProvider = ({ children }) => {
  const [state, dispatch] = useReducer(web_reducer, initialState);

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  return (
    <WebContext.Provider value={{ ...state, closeSidebar, openSidebar }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  return useContext(WebContext);
};
