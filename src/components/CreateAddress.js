import React from "react";
import styled from "styled-components";
import { FromAddress, NextBtn, SwitchAddress } from ".";
import { useAddressContext } from "../contexts/AddressContext";
import CancelShipBtn from "./CancelShipBtn";
import CPP from "./CPP";
import ToAddress from "./ToAddress";

const CreateAddress = ({ handleGoBack }) => {
  const { nextOnCreateAddress, clearCreateAddress } = useAddressContext();

  const handleCancel = () => {
    clearCreateAddress();
    handleGoBack();
  };

  return (
    <Wrapper>
      <div className="head">
        <CPP create />
        <div>
          <CancelShipBtn handleCancel={handleCancel} />
        </div>
      </div>
      <div className="address-section">
        <div className="address">
          <FromAddress />
        </div>
        <SwitchAddress />
        <div className="address">
          <ToAddress />
        </div>
      </div>
      <div className="tail">
        <NextBtn handleClick={nextOnCreateAddress} />
      </div>
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
    /* width: 100%; */
  }
  .tail {
    background-color: var(--clr-grey-10);
    padding: 2rem;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }
  .address-section {
    background-color: var(--clr-grey-10);
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 2.5rem;
    flex-direction: column;
    .address {
      width: 100%;
    }
  }
  @media screen and (min-width: 992px) {
    .head {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .address-section {
      flex-direction: row;
      gap: 1rem;
    }
    .address {
      flex: 1;
    }
  }
`;

export default CreateAddress;
