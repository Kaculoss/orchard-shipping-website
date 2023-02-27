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
  HIDE_CREATE_ADDRESS,
  HIDE_CREATE_SHIP_DETAILS,
  NEXT_ON_CREATE_ADDRESS,
  SHOW_CREATE_ADDRESS,
  SHOW_CREATE_SHIP_DETAILS,
  SWITCH_ADDRESS,
} from "../actions";

const ship_reducer = (state, action) => {
  if (action.type === ADD_PHONE_TO_TO_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;

    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        phone: action.payload,
        errors: { ...state.toAddress.errors, phone: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          phone: "Phone number should be more than three (3) digits",
        },
      },
    };
  }
  if (action.type === ADD_COUNTRY_TO_TO_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        country: action.payload,
        errors: { ...state.toAddress.errors, country: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          country: "Please select the destination country",
        },
      },
    };
  }
  if (action.type === ADD_NAME_TO_TO_ADDRESS) {
    let errorChecker =
      action.payload.length > 3 && action.payload.includes(" ") ? false : true;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        name: action.payload,
        errors: { ...state.toAddress.errors, name: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          name: "Please type in the receiver's name in this format; 'John Doe'",
        },
      },
    };
  }
  if (action.type === ADD_COMPANY_TO_TO_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        company: action.payload,
        errors: { ...state.toAddress.errors, company: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          company: "Please enter the full company name",
        },
      },
    };
  }
  if (action.type === ADD_ADDRESS1_TO_TO_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        address1: action.payload,
        errors: { ...state.toAddress.errors, address1: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          address1: "Please fill this required address section in full",
        },
      },
    };
  }
  if (action.type === ADD_ADDRESS2_TO_TO_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        address2: action.payload,
        errors: { ...state.toAddress.errors, address2: errorChecker },
      },
    };
  }
  if (action.type === ADD_ADDRESS3_TO_TO_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        address3: action.payload,
        errors: { ...state.toAddress.errors, address3: errorChecker },
      },
    };
  }
  if (action.type === ADD_CITY_TO_TO_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        city: action.payload,
        errors: { ...state.toAddress.errors, city: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          city: "Please select the destination city",
        },
      },
    };
  }
  if (action.type === ADD_STATE_TO_TO_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        state: action.payload,
        errors: { ...state.toAddress.errors, state: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          state: "Please enter the destination state / region",
        },
      },
    };
  }
  if (action.type === ADD_EMAIL_TO_TO_ADDRESS) {
    let errorChecker =
      action.payload.length > 12 && action.payload.endsWith("@gmail.com")
        ? false
        : true;
    return {
      ...state,
      toAddress: {
        ...state.toAddress,
        email: action.payload,
        errors: { ...state.toAddress.errors, email: errorChecker },
        errorMsgs: {
          ...state.toAddress.errorMsgs,
          email:
            "Please enter receiver's email in this format; 'example@gmail.com'",
        },
      },
    };
  }
  if (action.type === CLEAR_TO_ADDRESS) {
    return {
      ...state,
      toAddress: {
        addressError: false,
        name: "",
        company: "",
        country: "",
        address1: "",
        address2: "",
        address3: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        errors: {
          name: true,
          company: true,
          country: true,
          address1: true,
          city: true,
          state: true,
          phone: true,
          email: true,
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
  }

  if (action.type === ADD_PHONE_TO_FROM_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        phone: action.payload,
        errors: { ...state.fromAddress.errors, phone: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          phone: "Phone number should be more than three (3) digits",
        },
      },
    };
  }
  if (action.type === ADD_COUNTRY_TO_FROM_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        country: action.payload,
        errors: { ...state.fromAddress.errors, country: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          country: "Please select the origin country",
        },
      },
    };
  }
  if (action.type === ADD_NAME_TO_FROM_ADDRESS) {
    let errorChecker =
      action.payload.length > 3 && action.payload.includes(" ") ? false : true;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        name: action.payload,
        errors: { ...state.fromAddress.errors, name: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          name: "Please type in the sender's name in this format; 'John Doe'",
        },
      },
    };
  }
  if (action.type === ADD_COMPANY_TO_FROM_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        company: action.payload,
        errors: { ...state.fromAddress.errors, company: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          company: "Please enter the full company name",
        },
      },
    };
  }
  if (action.type === ADD_ADDRESS1_TO_FROM_ADDRESS) {
    let errorChecker =
      action.payload === "" || action.payload.length < 3 ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        address1: action.payload,
        errors: { ...state.fromAddress.errors, address1: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          address1: "Please fill this required address section in full",
        },
      },
    };
  }
  if (action.type === ADD_ADDRESS2_TO_FROM_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        address2: action.payload,
        errors: { ...state.fromAddress.errors, address2: errorChecker },
      },
    };
  }
  if (action.type === ADD_ADDRESS3_TO_FROM_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        address3: action.payload,
        errors: { ...state.fromAddress.errors, address3: errorChecker },
      },
    };
  }
  if (action.type === ADD_CITY_TO_FROM_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        city: action.payload,
        errors: { ...state.fromAddress.errors, city: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          city: "Please select the origin city",
        },
      },
    };
  }
  if (action.type === ADD_STATE_TO_FROM_ADDRESS) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        state: action.payload,
        errors: { ...state.fromAddress.errors, state: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          state: "Please enter the origin state / region",
        },
      },
    };
  }
  if (action.type === ADD_EMAIL_TO_FROM_ADDRESS) {
    let errorChecker =
      action.payload.length > 12 && action.payload.endsWith("@gmail.com")
        ? false
        : true;
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        email: action.payload,
        errors: { ...state.fromAddress.errors, email: errorChecker },
        errorMsgs: {
          ...state.fromAddress.errorMsgs,
          email:
            "Please enter sender's email in this format; 'example@gmail.com'",
        },
      },
    };
  }
  if (action.type === CLEAR_FROM_ADDRESS) {
    return {
      ...state,
      fromAddress: {
        addressError: false,
        name: "",
        company: "",
        country: "",
        address1: "",
        address2: "",
        address3: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        errors: {
          name: true,
          company: true,
          country: true,
          address1: true,
          city: true,
          state: true,
          phone: true,
          email: true,
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
          email:
            "Please enter sender's email in this format; 'example@gmail.com'",
        },
      },
    };
  }

  if (action.type === SWITCH_ADDRESS) {
    let oldFromAddress = state.fromAddress;
    let oldToAddress = state.toAddress;

    return {
      ...state,
      fromAddress: oldToAddress,
      toAddress: oldFromAddress,
    };
  }

  if (action.type === NEXT_ON_CREATE_ADDRESS) {
    let {
      name: toName,
      company: toCompany,
      country: toCountry,
      address1: toAddress1,
      city: toCity,
      state: toState,
      phone: toPhone,
      email: toEmail,
    } = state.toAddress;
    let {
      name: fromName,
      company: fromCompany,
      country: fromCountry,
      address1: fromAddress1,
      city: fromCity,
      state: fromState,
      phone: fromPhone,
      email: fromEmail,
    } = state.fromAddress;

    let newFromAddressError;
    let newToAddressError;

    if (
      fromName &&
      fromCompany &&
      fromCountry &&
      fromAddress1 &&
      fromCity &&
      fromState &&
      fromPhone &&
      fromEmail
    ) {
      newFromAddressError = false;
    } else {
      newFromAddressError = true;
    }

    if (
      toName &&
      toCompany &&
      toCountry &&
      toAddress1 &&
      toCity &&
      toState &&
      toPhone &&
      toEmail
    ) {
      newToAddressError = false;
    } else {
      newToAddressError = true;
    }

    if (!newToAddressError && !newFromAddressError) {
      return {
        ...state,
        showCreateShipDetails: true,
        showCreateAddress: false,
        fromAddress: {
          ...state.fromAddress,
          addressError: newFromAddressError,
        },
        toAddress: {
          ...state.toAddress,
          addressError: newToAddressError,
        },
      };
    }
    return {
      ...state,
      fromAddress: {
        ...state.fromAddress,
        addressError: newFromAddressError,
      },
      toAddress: {
        ...state.toAddress,
        addressError: newToAddressError,
      },
    };
  }

  if (action.type === SHOW_CREATE_ADDRESS) {
    return {
      ...state,
      showCreateAddess: true,
    };
  }

  if (action.type === HIDE_CREATE_ADDRESS) {
    return {
      ...state,
      showCreateAddess: false,
    };
  }

  if (action.type === SHOW_CREATE_SHIP_DETAILS) {
    return {
      ...state,
      showCreateShipDetails: true,
    };
  }

  if (action.type === HIDE_CREATE_SHIP_DETAILS) {
    return {
      ...state,
      showCreateShipDetails: false,
    };
  }

  if (action.type === CLEAR_CREATE_ADDRESS) {
    return {
      ...state,
      showCreateAddress: true,
      showCreateShipDetails: false,
      fromAddress: {
        addressError: false,
        name: "",
        company: "",
        country: "",
        address1: "",
        address2: "",
        address3: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        errors: {
          name: true,
          company: true,
          country: true,
          address1: true,
          address2: true,
          address3: true,
          city: true,
          state: true,
          phone: true,
          email: true,
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
          email:
            "Please enter sender's email in this format; 'example@gmail.com'",
        },
      },
      toAddress: {
        addressError: false,
        name: "",
        company: "",
        country: "",
        address1: "",
        address2: "",
        address3: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        errors: {
          name: true,
          company: true,
          country: true,
          address1: true,
          address2: true,
          address3: true,
          city: true,
          state: true,
          phone: true,
          email: true,
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
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ship_reducer;
