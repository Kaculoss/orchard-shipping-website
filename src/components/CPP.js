import React from "react";
import styled from "styled-components";

const CPP = ({ create, pay, print }) => {
  return (
    <Wrapper>
      <p className={(create || pay || print) && "create"}>Create Shipment</p>
      <div className={pay || print ? "line line-1" : "line"}></div>
      <p className={(pay || print) && "pay"}>Pay</p>
      <div className={print ? "line line-2" : "line"}></div>
      <p className={print && "print"}>Print</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  p {
    margin-bottom: 0;
    color: var(--clr-grey-8);
  }
  .line {
    height: 5px;
    width: 50px;
    border-radius: 2px;
    background-color: var(--clr-grey-8);
  }
  .create,
  .pay,
  .print {
    color: var(--clr-grey-1);
  }
  .line-1,
  .line-2 {
    background-color: var(--clr-grey-1);
  }
`;

export default CPP;
