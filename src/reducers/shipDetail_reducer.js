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

const shipDetail_reducer = (state, action) => {
  if (action.type === SET_SHIPMENT_TYPE_TO_DOC) {
    return { ...state, overallShipmentType: "doc" };
  }

  if (action.type === SET_SHIPMENT_TYPE_TO_PACK) {
    return { ...state, overallShipmentType: "pack" };
  }

  if (action.type === SET_DOC_DESCRIPTION) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      documentType: {
        ...state.documentType,
        description: action.payload,
        errors: { ...state.documentType.errors, description: errorChecker },
        errorMsgs: {
          ...state.documentType.errorMsgs,
          description: "Required",
        },
      },
    };
  }

  if (action.type === SET_DOC_SHIPMENT_REFERENCE) {
    let errorChecker = action.payload.length < 3 ? true : false;
    return {
      ...state,
      documentType: {
        ...state.documentType,
        shipReference: action.payload,
        errors: { ...state.documentType.errors, shipReference: errorChecker },
      },
    };
  }

  if (action.type === SET_PACK_DESCRIPTION) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      packageType: {
        ...state.packageType,
        description: action.payload,
        errors: { ...state.packageType.errors, description: errorChecker },
        errorMsgs: {
          ...state.packageType.errorMsgs,
          description: "Required",
        },
      },
    };
  }

  if (action.type === SET_PACK_SHIPMENT_REFERENCE) {
    let errorChecker = action.payload.length < 3 ? true : false;
    return {
      ...state,
      packageType: {
        ...state.packageType,
        shipReference: action.payload,
        errors: { ...state.packageType.errors, shipReference: errorChecker },
      },
    };
  }

  if (action.type === SET_PACK_SHIPMENT_PURPOSE) {
    let errorChecker = action.payload === "" ? true : false;
    return {
      ...state,
      packageType: {
        ...state.packageType,
        shipPurpose: action.payload,
        errors: { ...state.packageType.errors, shipPurpose: errorChecker },
        errorMsgs: {
          ...state.packageType.errorMsgs,
          shipPurpose: "Required",
        },
      },
    };
  }

  if (action.type === NEXT_ON_CREATE_SHIP_DETAILS) {
    if (action.payload === "document") {
      let { description } = state.documentType;
      let newDocumentError = description ? false : true;

      return {
        ...state,
        documentType: {
          ...state.documentType,
          documentError: newDocumentError,
        },
      };
    } else {
      return { ...state };
    }
  }

  if (action.type === CLEAR_CREATE_SHIP_DETAILS) {
    return {
      ...state,
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
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default shipDetail_reducer;
