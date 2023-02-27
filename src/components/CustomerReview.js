import React from "react";
import styled from "styled-components";
import { customerReviews } from "../utilities/constants";

const CustomerReview = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p className="first">Customer reviews</p>
        <h4>What our customers are saying</h4>
        <div className="services-center">
          {customerReviews.map((item) => {
            const { id, name, img, review } = item;
            return (
              <article className="service" key={id}>
                <h1>"</h1>
                <p className="review">{review}</p>
                <div className="customer">
                  <span className="icon">
                    <img src={img} alt={name} />
                  </span>
                  <div className="customer-details">
                    <h5>{name}</h5>
                    <p>Customer</p>
                  </div>
                </div>
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
  padding-top: 3rem;
  padding-bottom: 2rem;
  background: var(--clr-primary-9);
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
    text-align: left;
    gap: 2rem;
    padding-top: 1rem;
    .service {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      border-radius: 8px;
      width: 350px;
      height: 350px;
      transition: var(--transition);
      h1 {
        margin-bottom: 0;
        color: var(--clr-primary-5);
      }
      p {
        font-size: 0.9rem;
      }
      .review,
      .customer {
        margin-left: 2rem;
      }
      .customer {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
        span {
          height: 3.5rem;
          width: 3.5rem;
          border-radius: 50%;
          display: grid;
          margin: 0 auto;
          place-items: center;
          img {
            object-fit: contain;
            height: 3.5rem;
            width: 3.5rem;
            border-radius: 50%;
          }
        }
        .customer-details {
          display: flex;
          flex-direction: column;
        }
      }
      &:hover {
        background: var(--clr-primary-5);
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1),
          -3px -3px 15px rgba(0, 0, 0, 0.1);
        h1 {
          color: var(--clr-grey-1);
        }
      }
    }
  }
`;

export default CustomerReview;
