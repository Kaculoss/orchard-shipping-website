import React from "react";
import styled from "styled-components";
import banner from "../assets/Best-courier-services.jpg";

const Banner = () => {
  return (
    <Wrapper>
      <header
        className="banner"
        style={{
          background: `rgba(0,0,0,0.6) url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="banner-contents">
          <h5>shipping, courier services and transportation</h5>
          <h2 className="banner-title">
            The global leader in the shipping logistics industry
          </h2>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner {
    object-fit: contain;
    height: 600px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner-contents {
      width: 90vw;
      max-width: var(--max-width);
      text-align: center;
      margin-top: 3rem;
      font-weight: lighter;
    }
  }
`;

export default Banner;
