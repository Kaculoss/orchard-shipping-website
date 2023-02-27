import React from "react";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";

const CancelShipBtn = ({ handleCancel }) => {
  return (
    <Wrapper className="btn" type="button" onClick={handleCancel}>
      <MdCancel />
      Cancel
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  text-transform: capitalize;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-red-dark);
  padding: 0.2rem 0.5rem;
`;

export default CancelShipBtn;
