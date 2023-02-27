import React from "react";
import styled from "styled-components";

const TrackAddress = ({ type, name, number, address, email }) => {
  return (
    <Wrapper>
      <div className="title">
        <h5>{type} Address</h5>
      </div>
      <div className="values">
        <p>
          <span>{type} Name: </span>
          {name}
        </p>
      </div>
      <div className="values">
        <p>
          <span>Phone Number: </span>
          {number}
        </p>
      </div>
      <div className="values">
        <p>
          <span>Address: </span>
          {address}
        </p>
      </div>
      <div className="values">
        <p>
          <span>Email: </span>
          {email}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95vw;
  .title {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--clr-grey-2);
    text-align: left;
    h5 {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
  }
  .values {
    p {
      font-weight: 400;
    }
    span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }
  @media screen and (min-width: 992px) {
    width: 550px;
  }
`;

export default TrackAddress;
