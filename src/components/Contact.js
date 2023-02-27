import React from "react";
import styled from "styled-components";
import banner from "../assets/shutterstockjpg.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <div
        className="banner"
        style={{
          background: `rgba(0,0,0,0.6) url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="banner-contents">
          <div className="contact">
            <h5>Call us now: (+233) 54 985 3041</h5>
            <h2 className="banner-title">
              Are you looking for professional Logistic services?
            </h2>
          </div>
          <button type="button" className="btn">
            Contact Us
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner {
    object-fit: contain;
    height: 500px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner-contents {
      width: 90vw;
      max-width: var(--max-width);
      margin: 0 auto;
      text-align: center;
      margin-top: 3rem;
      font-weight: lighter;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .btn {
        margin-top: 1rem;
        align-self: flex-end;
        margin-right: 1rem;
        text-transform: capitalize;
        padding: 0.8rem 1rem;
        font-size: 1rem;
      }
      .contact {
        text-align: left;
      }
    }
  }
`;

export default Contact;
