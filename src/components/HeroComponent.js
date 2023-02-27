import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroComponent = ({
  title,
  info,
  btn,
  list,
  btnText,
  img,
  reverse,
  to,
}) => {
  return (
    <Wrapper className="section-center">
      <div className={`${reverse ? "hero-compo reverse" : "hero-compo"}`}>
        <article className="content">
          <h4>{title}</h4>
          <p>{info}</p>
          {btn ? (
            btnText && (
              <Link to={to} className="btn hero-btn">
                {btnText}
              </Link>
            )
          ) : (
            <ul>
              {list.map((listItem, index) => {
                return <li key={index}>{listItem}</li>;
              })}
            </ul>
          )}
        </article>

        <article className="img-container">
          <img src={img} alt={title} className="main-img" />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 1rem;
  .hero-compo {
    min-height: 50vh;
    display: grid;
    place-items: center;
    .img-container {
      display: none;
    }
    p {
      line-height: 1.5;
      max-width: 45em;
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    ul {
      padding-top: 0;
      li {
        color: var(--clr-grey-3);
        list-style: inside square;
      }
    }
    .hero-btn {
      background: var(--clr-grey-1);
      color: white;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  @media screen and (min-width: 992px) {
    .reverse {
      .content {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
      }
      .img-container {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
    .hero-compo {
      height: 70vh;
      grid-template-columns: 1fr 1fr;
      gap: 8rem;
      margin-bottom: 9rem;
      h4 {
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.1rem;
      }
      .hero-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
      .img-container {
        display: block;
        .main-img {
          width: 100%;
          height: 500px;
          border-radius: var(--radius);
          display: block;
          object-fit: cover;
        }
      }
    }
  }
`;

export default HeroComponent;
