import React from "react";
import styled from "styled-components";
import { TrackResults } from "../components";

const TrackPage = () => {
  return (
    <Wrapper className="">
      <div className="section-center">
        <div className="track-search">
          <h4 className="mb-3">Enter the Consignment No.</h4>
          <div className="input-group">
            <input
              type="text"
              className="form-control py-1"
              placeholder="Enter Tracking Number"
              aria-label="Enter Tracking Number"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text p-2" id="basic-addon2">
              Track Results
            </span>
          </div>
          <h5 className="my-3">Example: WPC01234567891011-CARGO</h5>
        </div>
        <TrackResults />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: #232f3e; */
  padding: 8rem 0.5rem 7rem 0.5rem;
  background-color: var(--clr-primary-10);
  .track-search {
    width: 95vw;
    margin-bottom: 3rem;
    .input-group-text {
      background-color: #232f3e;
      color: white;
      padding: 8px 17px;
    }
    .form-control {
      background-color: #77777748;
    }
  }
  @media screen and (min-width: 992px) {
    padding: 8rem 2rem 4rem 2rem;
    .track-search {
      padding-left: 4rem;
      width: 60vw;
    }
  }
`;

export default TrackPage;
