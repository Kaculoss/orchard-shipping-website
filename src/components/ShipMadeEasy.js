import React from "react";
import styled from "styled-components";
import { easyShipItems } from "../utilities/constants";

const ShipMadeEasy = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p className="first">How it works</p>
        <h4>Shipping Made Easy!</h4>
        <div className="services-center">
          {easyShipItems.map((item) => {
            const { id, icon, title, content } = item;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h5>{title}</h5>
                <p>{content}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 6rem;
  h4 {
    margin-bottom: 1.5rem;
  }
  .first {
    font-weight: 700;
  }
  .services-center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 2rem;
    .service {
      background: var(--clr-primary-9);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      border-radius: 8px;
      width: 350px;
      height: 250px;
      transition: var(--transition);
      svg {
        color: var(--clr-grey-1);
        font-size: 2.5rem;
      }

      &:hover {
        transform: scale(1.05);
        background: var(--clr-primary-5);
        cursor: pointer;
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1),
          -3px -3px 15px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export default ShipMadeEasy;
