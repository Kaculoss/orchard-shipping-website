import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { serviceCost } from "../utilities/constants";
import { formatPrice } from "../utilities/helpers";

const Service = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="services-center">
          {serviceCost.map((services) => {
            const { id, icon, service, desc, cost } = services;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h5>{service}</h5>
                <p>{desc}</p>
                <h5 className="cost">From {formatPrice(cost)}</h5>
              </article>
            );
          })}
        </div>

        <div className="service-buttons">
          <Link to="/track" className="track button">
            <FaSearch /> Track Consignment
          </Link>
          <Link to="/franchise" className="contact button">
            <FiPhoneCall /> Contact us now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .service-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 5rem;
    padding-top: 3.5rem;
    .button {
      width: 12rem;
      font-size: 1rem;
      padding: 0.5rem;
      text-align: center;
      cursor: pointer;
      border: 1px solid var(--clr-grey-1);
      border-radius: 3px;
      transition: var(--transition);
    }
    .track {
      background: var(--clr-grey-1);
      color: white;
      &:hover {
        background: var(--clr-grey-2);
        transform: scale(1.05);
      }
    }
    .contact {
      background: var(--clr-primary-10);
      color: var(--clr-grey-1);
      &:hover {
        background: var(--clr-primary-9);
        transform: scale(1.05);
      }
    }
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
      padding: 1.5rem;
      border-radius: 8px;
      min-width: 350px;
      transition: var(--transition);
      span {
        width: 4rem;
        height: 4rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        border-radius: 50%;
        margin-bottom: 1rem;
        background: var(--clr-primary-10);
        color: var(--clr-grey-1);
        svg {
          font-size: 2rem;
        }
      }
      p {
        text-transform: uppercase;
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
  @media screen and (min-width: 992px) {
    .services-center {
      transform: translateY(-5rem);
    }
    .service-buttons {
      padding-top: 0;
    }
  }
`;

export default Service;
