import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CreateAddress, CreateShipDetails } from "../components";
import { useAddressContext } from "../contexts/AddressContext";

const ShipWithUsPage = () => {
  const { showCreateAddress, showCreateShipDetails } = useAddressContext();
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <Wrapper>
      <div className="section-center">
        {showCreateAddress && <CreateAddress handleGoBack={handleGoBack} />}
        {showCreateShipDetails && <CreateShipDetails />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8rem 0rem 4rem 0rem;
  background-color: var(--clr-primary-10);
  transition: var(--transition);
  @media screen and (min-width: 992px) {
    padding: 8rem 2rem 4rem 2rem;
  }
`;

export default ShipWithUsPage;
