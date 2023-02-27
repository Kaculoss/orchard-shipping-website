import React from "react";
import styled from "styled-components";
import { serviceTypes } from "../utilities/constants";
import FormRow from "./FormRow";

const ShipQuote = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <form action="" className="form">
          <h4>GET A FREE INTERNATIONAL SHIPPING QUOTE</h4>
          <div className="form-center">
            <FormRow
              inputTag={true}
              selectTag={false}
              name="yourName"
              type="text"
              value=""
              placeholdText="Your Name"
            />
            <FormRow
              name="yourNumber"
              type="number"
              value=""
              placeholdText="Your Phone Number"
              inputTag={true}
              selectTag={false}
            />
            <FormRow
              inputTag={false}
              selectTag={true}
              name="service"
              selectText="Service"
              selectItems={serviceTypes.sort()}
              selectType="Type 3"
            />
            <button className="submit-btn" type="submit">
              Get quote
            </button>
          </div>
        </form>
        <article className="footer">
          <h3>We Provide The Best Services</h3>
          <p>
            We can provide you with a quick quote for your local and
            international shipping needs, for packages and pallets of any size.
            Enter the details about your shipment below to find your quotes. If
            you are satisfied, simply book.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-5);
  padding-top: 2rem;
  .footer {
    width: 70vw;
    margin: 0 auto;
    text-align: center;
    max-width: 996px;
    padding: 4rem 0;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-weight: 700;
      color: var(--clr-grey-1);
    }
  }
  .form {
    width: 90vw;
    max-width: var(--max-width);
    background: var(--clr-primary-9);
    border-radius: 8px;
    padding: 2.5rem 2rem;
    margin: 0 auto;
    z-index: 90;
    h4 {
      font-size: 1.2rem;
      text-align: center;
    }
    .form-center {
      display: grid;
      row-gap: 0.5rem;
    }
    .form-row {
      margin-bottom: 0;
      .form-input,
      .form-select {
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: 5px;
        background: var(--clr-primary-10);
        border: 1px solid var(--clr-primary-6);
        height: 35px;
      }
    }
  }
  .submit-btn {
    align-self: end;
    margin-top: 1rem;
    height: 35px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    font-weight: 700;
    &:hover {
      color: var(--clr-white);
    }
  }
  @media screen and (min-width: 992px) {
    padding-top: 0;
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .submit-btn {
      margin-top: 0;
      place-self: center;
      border-radius: 7px;
      padding: 0.6rem 1.2rem;
    }
    .form {
      transform: translateY(-5rem);
    }
    .footer {
      padding-top: 0;
      padding-bottom: 7rem;
    }
  }
  @media screen and (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .submit-btn {
      margin-top: 1rem;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      place-self: unset;
    }
  }
`;
export default ShipQuote;
