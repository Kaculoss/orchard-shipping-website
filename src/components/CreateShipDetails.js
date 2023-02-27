import React from "react";
import styled from "styled-components";
import { useAddressContext } from "../contexts/AddressContext";
import { useShipDetailContext } from "../contexts/ShipDetailContext";
import AddressSection from "./AddressSection";
import CancelShipBtn from "./CancelShipBtn";
import CPP from "./CPP";
import NextBtn from "./NextBtn";
import ShipmentDetails from "./ShipmentDetails";

const CreateShipDetails = ({ handleGoBack }) => {
  const { fromAddress, toAddress, clearCreateAddress } = useAddressContext();
  const {
    nextOnCreateShipDetails,
    overallShipmentType,
    clearCreateShipDetails,
  } = useShipDetailContext();

  const handleCancel = () => {
    clearCreateShipDetails();
    clearCreateAddress();
    handleGoBack();
  };

  const handleNext = () => {
    if (overallShipmentType === "doc") {
      nextOnCreateShipDetails("document");
    }
    if (overallShipmentType === "pack") {
      nextOnCreateShipDetails("package");
    }
  };

  return (
    <Wrapper>
      <div className="head">
        <CPP create />
        <div>
          <CancelShipBtn handleCancel={handleCancel} />
        </div>
      </div>
      <div className="main-head">
        <div className="address">
          <AddressSection from fullAddress={fromAddress} />
          <AddressSection to fullAddress={toAddress} />
        </div>
        <div className="edit-address">
          <button className="btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="shipment-details">
        <ShipmentDetails />
      </div>
      {overallShipmentType && (
        <div className="tail">
          <NextBtn handleClick={handleNext} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .head,
  .tail {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
  }
  .tail {
    background-color: var(--clr-grey-10);
    padding: 2rem;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }
  .main-head {
    width: 100%;
    padding: 0.8rem;
    background-color: var(--clr-grey-7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    /* gap: 1rem; */
    .address {
      flex: 8;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: space-between;
    }
    .edit-address {
      flex: 2;
      text-align: right;
    }
  }
  .shipment-details {
    background-color: var(--clr-grey-10);
    margin-top: 0.8rem;
    padding: 1.5rem 0.8rem;
    box-shadow: var(--light-shadow);
    /* border-radius: 10px; */
  }
  @media screen and (min-width: 992px) {
    .head {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .main-head {
      .address {
        flex-direction: row;
      }
    }
  }
`;

export default CreateShipDetails;
