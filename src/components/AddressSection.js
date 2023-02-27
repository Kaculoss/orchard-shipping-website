import React from "react";
import styled from "styled-components";
import markerA from "../assets/marker-a.png";
import markerB from "../assets/marker-b.png";

const AddressSection = ({ to, from, fullAddress }) => {
  return (
    <Wrapper>
      <div className="icon">
        {to && <img src={markerB} alt="marker" />}
        {from && <img src={markerA} alt="marker" />}
      </div>
      <div className="info">
        <p>
          {to && "To"}
          {from && "From"}
        </p>
        <div className="first-p">
          <p>{fullAddress?.name}</p>
          <p>{fullAddress?.company}</p>
          <p>{fullAddress?.address1}</p>
          <p>{fullAddress?.address2}</p>
          <p>{fullAddress?.address3}</p>
          <p>{`${fullAddress?.city}, ${fullAddress?.state}`}</p>
          <p>{fullAddress?.country}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  .icon {
    img {
      width: 45px;
    }
  }
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--clr-grey-5);
  }
  .info {
    padding-left: 0.5rem;
  }
  .first-p {
    margin-bottom: 1rem;

    p {
      margin-bottom: 0;
      font-size: 0.8rem;
    }
  }
`;

export default AddressSection;
