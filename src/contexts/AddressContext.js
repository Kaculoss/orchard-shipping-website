import { createContext, useContext, useReducer } from "react";
import {
  ADD_ADDRESS1_TO_FROM_ADDRESS,
  ADD_ADDRESS1_TO_TO_ADDRESS,
  ADD_ADDRESS2_TO_FROM_ADDRESS,
  ADD_ADDRESS2_TO_TO_ADDRESS,
  ADD_ADDRESS3_TO_FROM_ADDRESS,
  ADD_ADDRESS3_TO_TO_ADDRESS,
  ADD_CITY_TO_FROM_ADDRESS,
  ADD_CITY_TO_TO_ADDRESS,
  ADD_COMPANY_TO_FROM_ADDRESS,
  ADD_COMPANY_TO_TO_ADDRESS,
  ADD_COUNTRY_TO_FROM_ADDRESS,
  ADD_COUNTRY_TO_TO_ADDRESS,
  ADD_EMAIL_TO_FROM_ADDRESS,
  ADD_EMAIL_TO_TO_ADDRESS,
  ADD_NAME_TO_FROM_ADDRESS,
  ADD_NAME_TO_TO_ADDRESS,
  ADD_PHONE_TO_FROM_ADDRESS,
  ADD_PHONE_TO_TO_ADDRESS,
  ADD_STATE_TO_FROM_ADDRESS,
  ADD_STATE_TO_TO_ADDRESS,
  CLEAR_CREATE_ADDRESS,
  CLEAR_FROM_ADDRESS,
  CLEAR_TO_ADDRESS,
  NEXT_ON_CREATE_ADDRESS,
  SWITCH_ADDRESS,
} from "../actions";
import address_reducer from "../reducers/address_reducer";

const initialState = {
  showCreateAddress: true,
  showCreateShipDetails: false,
  fromAddress: {
    addressError: false,
    name: "Sani Alhassan",
    company: "Kwame Nkrumah University of Science and Technology",
    country: "Ghana",
    address1: "Near Zongo Market",
    address2: "EN-153-8063",
    address3: "P.O.Box WY99",
    city: "Koforidua",
    state: "Eastern",
    phone: "0549853041",
    email: "sanialhassan875@gmail.com",
    errors: {
      name: false,
      company: false,
      country: false,
      address1: false,
      address2: false,
      address3: false,
      city: false,
      state: false,
      phone: false,
      email: false,
    },
    errorMsgs: {
      name: "Please type in the sender's name in this format; 'John Doe'",
      company: "Please enter the full company name",
      country: "Please select the origin country",
      address1: "Please fill this required address section in full",
      address2: "",
      address3: "",
      city: "Please select the origin city",
      state: "Please enter the origin state / region",
      phone: "Phone number should be more than three (3) digits",
      email: "Please enter sender's email in this format; 'example@gmail.com'",
    },
  },
  toAddress: {
    addressError: false,
    name: "Sani Alhassan",
    company: "Kwame Nkrumah University of Science and Technology",
    country: "Ghana",
    address1: "Near Zongo Market",
    address2: "EN-153-8063",
    address3: "P.O.Box WY99",
    city: "Koforidua",
    state: "Eastern",
    phone: "0549853041",
    email: "sanialhassan875@gmail.com",
    errors: {
      name: false,
      company: false,
      country: false,
      address1: false,
      address2: false,
      address3: false,
      city: false,
      state: false,
      phone: false,
      email: false,
    },
    errorMsgs: {
      name: "Please type in the receiver's name in this format; 'John Doe'",
      company: "Please enter the full company name",
      country: "Please select the destination country",
      address1: "Please fill this required address section in full",
      address2: "",
      address3: "",
      city: "Please select the destination city",
      state: "Please enter the destination state / region",
      phone: "Phone number should be more than three (3) digits",
      email:
        "Please enter receiver's email in this format; 'example@gmail.com'",
    },
  },
};

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(address_reducer, initialState);

  const formatPhoneNumber = (value) => {
    // if (!value) return value;
    // let newValue;
    // if (value.charAt(0) === "0") {
    //   newValue = value.substring(1);
    // } else {
    //   newValue = value;
    // }
    // const phoneNumber = newValue.replace(/[^\d]/g, "");
    // const phoneLen = phoneNumber.Length;
    // if (phoneLen < 3) return phoneNumber;
    // if (phoneLen < 6) {
    //   return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2)}`;
    // }
    // return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(
    //   2,
    //   5
    // )}-${phoneNumber.slice(5, 14)}`;

    const cleaned = ("" + value).replace(/\D/g, "");
    let newValue;
    if (cleaned.charAt(0) === "0") {
      newValue = cleaned.substring(1);
    } else {
      newValue = cleaned;
    }
    const formatted = newValue.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
    return formatted;
  };

  const toAddPhoneAddress = (payload) => {
    dispatch({ type: ADD_PHONE_TO_TO_ADDRESS, payload });
  };
  const toAddNameAddress = (payload) => {
    dispatch({ type: ADD_NAME_TO_TO_ADDRESS, payload });
  };
  const toAddCompanyAddress = (payload) => {
    dispatch({ type: ADD_COMPANY_TO_TO_ADDRESS, payload });
  };
  const toAddCountryAddress = (payload) => {
    dispatch({ type: ADD_COUNTRY_TO_TO_ADDRESS, payload });
  };
  const toAddAddress1Address = (payload) => {
    dispatch({ type: ADD_ADDRESS1_TO_TO_ADDRESS, payload });
  };
  const toAddAddress2Address = (payload) => {
    dispatch({ type: ADD_ADDRESS2_TO_TO_ADDRESS, payload });
  };
  const toAddAddress3Address = (payload) => {
    dispatch({ type: ADD_ADDRESS3_TO_TO_ADDRESS, payload });
  };
  const toAddCityAddress = (payload) => {
    dispatch({ type: ADD_CITY_TO_TO_ADDRESS, payload });
  };
  const toAddStateAddress = (payload) => {
    dispatch({ type: ADD_STATE_TO_TO_ADDRESS, payload });
  };
  const toAddEmailAddress = (payload) => {
    dispatch({ type: ADD_EMAIL_TO_TO_ADDRESS, payload });
  };
  const clearToAddress = () => {
    dispatch({ type: CLEAR_TO_ADDRESS });
  };

  const fromAddPhoneAddress = (payload) => {
    dispatch({ type: ADD_PHONE_TO_FROM_ADDRESS, payload });
  };
  const fromAddNameAddress = (payload) => {
    dispatch({ type: ADD_NAME_TO_FROM_ADDRESS, payload });
  };
  const fromAddCompanyAddress = (payload) => {
    dispatch({ type: ADD_COMPANY_TO_FROM_ADDRESS, payload });
  };
  const fromAddCountryAddress = (payload) => {
    dispatch({ type: ADD_COUNTRY_TO_FROM_ADDRESS, payload });
  };
  const fromAddAddress1Address = (payload) => {
    dispatch({ type: ADD_ADDRESS1_TO_FROM_ADDRESS, payload });
  };
  const fromAddAddress2Address = (payload) => {
    dispatch({ type: ADD_ADDRESS2_TO_FROM_ADDRESS, payload });
  };
  const fromAddAddress3Address = (payload) => {
    dispatch({ type: ADD_ADDRESS3_TO_FROM_ADDRESS, payload });
  };
  const fromAddCityAddress = (payload) => {
    dispatch({ type: ADD_CITY_TO_FROM_ADDRESS, payload });
  };
  const fromAddStateAddress = (payload) => {
    dispatch({ type: ADD_STATE_TO_FROM_ADDRESS, payload });
  };
  const fromAddEmailAddress = (payload) => {
    dispatch({ type: ADD_EMAIL_TO_FROM_ADDRESS, payload });
  };
  const clearFromAddress = () => {
    dispatch({ type: CLEAR_FROM_ADDRESS });
  };

  const switchAddress = () => {
    dispatch({ type: SWITCH_ADDRESS });
  };

  const nextOnCreateAddress = () => {
    dispatch({ type: NEXT_ON_CREATE_ADDRESS });
  };

  const clearCreateAddress = () => {
    dispatch({ type: CLEAR_CREATE_ADDRESS });
  };

  return (
    <AddressContext.Provider
      value={{
        ...state,
        formatPhoneNumber,
        toAddPhoneAddress,
        toAddAddress1Address,
        toAddAddress2Address,
        toAddAddress3Address,
        toAddCityAddress,
        toAddCompanyAddress,
        toAddEmailAddress,
        toAddCountryAddress,
        toAddStateAddress,
        toAddNameAddress,
        clearToAddress,
        fromAddPhoneAddress,
        fromAddAddress1Address,
        fromAddAddress2Address,
        fromAddAddress3Address,
        fromAddCityAddress,
        fromAddCompanyAddress,
        fromAddEmailAddress,
        fromAddCountryAddress,
        fromAddStateAddress,
        fromAddNameAddress,
        clearFromAddress,
        switchAddress,
        nextOnCreateAddress,
        clearCreateAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(AddressContext);
};
