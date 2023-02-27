import React from "react";
import styled from "styled-components";

const ShipmentItem = ({ head, value }) => {
  return (
    <Wrapper>
      <p className="head">{head}:</p>
      <p className="tail">{value}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 180px;
  background-color: var(--clr-primary-10);
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 8px;
  .head {
    text-transform: capitalize;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }
  .tail {
    font-weight: 400;
  }
  @media screen and (min-width: 992px) {
    width: 250px;
  }
`;

export default ShipmentItem;
