import React from "react";
import { GrLinkNext } from "react-icons/gr";
import styled from "styled-components";

const NextBtn = ({ handleClick }) => {
  const handleNext = () => {
    handleClick();
  };

  return (
    <Wrapper className="btn" type="submit" onClick={handleNext}>
      Next
      <GrLinkNext size="1rem" color="hsl(210, 36%, 96%)" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-green-dark);
  font-size: 1rem;
  color: var(--clr-grey-10);
  svg {
    color: var(--clr-grey-10);
    font-size: 1rem;
  }
`;

export default NextBtn;
