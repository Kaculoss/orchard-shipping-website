import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { marqueBrands } from "../utilities/constants";

const Marque = () => {
  return (
    <Wrapper>
      <div className="container-xxl wraper">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                {marqueBrands.map((item, index) => {
                  return (
                    <div className="mx-4 w-25" key={index}>
                      <img src={item} alt={`"${item}"`} />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-9);
  padding: 1rem 0 3rem 0;
  .wraper {
    width: 100%;
  }
  .col-12 {
    padding-left: 0;
    padding-right: 0;
  }
  .card-wrapper {
    background-color: white;
    box-shadow: 0 0 10px #0000001a;
    width: 100vw;
    padding: 10px;
    img {
      width: 50px;
    }
  }
  @media screen and (min-width: 992px) {
    padding: 1rem 1rem 3rem 1rem;
    .wraper {
      width: initial;
    }
    .col-12 {
      padding-left: initial;
      padding-right: initial;
    }
    .card-wrapper {
      background-color: white;
      box-shadow: 0 0 10px #0000001a;
      border-radius: 15px;
      padding: 10px;
      width: initial;
      img {
        width: 100px;
      }
    }
  }
`;

export default Marque;
