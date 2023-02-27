import { createContext, useContext, useReducer } from "react";
import {
  CLEAR_CREATE_SHIP_DETAILS,
  NEXT_ON_CREATE_SHIP_DETAILS,
  SET_DOC_DESCRIPTION,
  SET_DOC_SHIPMENT_REFERENCE,
  SET_PACK_DESCRIPTION,
  SET_PACK_SHIPMENT_PURPOSE,
  SET_PACK_SHIPMENT_REFERENCE,
  SET_SHIPMENT_TYPE_TO_DOC,
  SET_SHIPMENT_TYPE_TO_PACK,
} from "../actions";
import shipDetail_reducer from "../reducers/shipDetail_reducer";

const initialState = {
  overallShipmentType: "",
  packageType: {
    packageError: false,
    description: "",
    shipReference: "",
    shipPurpose: "",
    errors: {
      description: true,
      shipReference: true,
      shipPurpose: true,
    },
    errorMsgs: {
      description: "Required",
      shipReference: "",
      shipPurpose: "Required",
    },
  },
  documentType: {
    documentError: false,
    description: "Books - hardback, paperback (non-commercial use)",
    shipReference: "",
    errors: {
      description: false,
      shipReference: true,
    },
    errorMsgs: {
      description: "Required",
      shipReference: "",
    },
  },
};

const ShipDetailContext = createContext();

export const ShipDetailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipDetail_reducer, initialState);

  const setShipTypeToDoc = () => {
    dispatch({ type: SET_SHIPMENT_TYPE_TO_DOC });
  };
  const setDocDescription = (payload) => {
    dispatch({ type: SET_DOC_DESCRIPTION, payload });
  };
  const setDocShipReference = (payload) => {
    dispatch({ type: SET_DOC_SHIPMENT_REFERENCE, payload });
  };

  const setShipTypeToPack = () => {
    dispatch({ type: SET_SHIPMENT_TYPE_TO_PACK });
  };
  const setPackDescription = (payload) => {
    dispatch({ type: SET_PACK_DESCRIPTION, payload });
  };
  const setPackShipReference = (payload) => {
    dispatch({ type: SET_PACK_SHIPMENT_REFERENCE, payload });
  };
  const setPackShipPurpose = (payload) => {
    dispatch({ type: SET_PACK_SHIPMENT_PURPOSE, payload });
  };

  const nextOnCreateShipDetails = (payload) => {
    dispatch({ type: NEXT_ON_CREATE_SHIP_DETAILS, payload });
  };
  const clearCreateShipDetails = () => {
    dispatch({ type: CLEAR_CREATE_SHIP_DETAILS });
  };

  return (
    <ShipDetailContext.Provider
      value={{
        ...state,
        setShipTypeToDoc,
        setShipTypeToPack,
        setDocDescription,
        setDocShipReference,
        setPackDescription,
        setPackShipReference,
        nextOnCreateShipDetails,
        clearCreateShipDetails,
        setPackShipPurpose,
      }}
    >
      {children}
    </ShipDetailContext.Provider>
  );
};

export const useShipDetailContext = () => {
  return useContext(ShipDetailContext);
};
