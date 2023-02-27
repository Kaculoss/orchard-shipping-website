import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";

const CallUsSearch = () => {
  return (
    <Wrapper className="callus-search-wrapper">
      <button className="call-us-btn">
        <FiPhoneCall />
        <span> (+233) 54 985 3041</span>
      </button>
      <button type="button" className="search-btn">
        <FaSearch />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  align-items: center;
  button {
    background: transparent;
    border-color: transparent;
    display: flex;
    align-items: center;
  }
  .call-us-btn {
    color: var(--clr-grey-1);
    font-size: 0.9rem;
    svg {
      margin-right: 0.3rem;
      color: #000;
      font-size: 1.1rem;
    }
    span {
      font-weight: bold;
    }
  }
  .search-btn {
    padding: 0.2rem;
    cursor: pointer;
    margin-left: 0.2rem;
  }
`;

export default CallUsSearch;
