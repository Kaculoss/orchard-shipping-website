import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/truck.png";
import { contactInfo, links, services } from "../utilities/constants";
import BulletPoints from "./BulletPoints";

const Footer = () => {
  const activate = ({ isActive }) => ({
    fontWeight: isActive && "500",
  });

  return (
    <FootContainer>
      <div className="footer-main">
        <div className="footer-col footer-about">
          <img src={logo} alt="delivery-service" className="logo" />
          <p>
            A shipping delivery service company commited to safeguarding the
            confidentiality, integrity and availability of all physical and
            electronical informations and assets of the organization...
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <NavLink to={url} style={activate}>
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((service) => {
              return <li key={service.id}>{service.service}</li>;
            })}
          </ul>
        </div>

        <div className="footer-col footer-contact-info">
          <h4>Contact Info</h4>
          <div className="bullets">
            {contactInfo.map(({ id, head, info }) => {
              return <BulletPoints key={id} head={head} point={info} />;
            })}
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <p>
          © 2023 - Wig's Shipping Company Official Website | Created & Designed
          By Sani Alhassan (Keezy){" "}
        </p>
      </div>
    </FootContainer>
  );
};

const FootContainer = styled.footer`
  background-color: var(--clr-primary-3);
  padding-top: 1rem;
  .footer-main {
    width: 90vw;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    margin: 0 auto;
    max-width: var(--max-width);
    padding-top: 1rem;
    color: var(--clr-grey-10);
    p {
      font-size: 0.8rem;
      color: var(--clr-grey-8);
    }
    h5 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0;
    }
    h4 {
      font-size: 1.2rem;
    }
    li {
      font-size: 0.9rem;
      text-transform: capitalize;
      color: var(--clr-grey-8);

      a {
        color: var(--clr-grey-8);
      }
    }
  }
  .footer-col {
    flex: 1;
    ul {
      padding-left: 0;
    }
  }
  .footer-about {
    flex: 2;
    padding-right: 1rem;
    .logo {
      width: 225px;
    }
  }
  .footer-footer {
    font-size: 0.7rem;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    text-align: center;
    border-top: 1px solid var(--clr-grey-8);
    p {
      margin-bottom: 2px;
      color: var(--clr-grey-8);
    }
  }
  @media screen and (max-width: 768px) {
    .footer-main {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      text-align: center;
    }
  }
`;

export default Footer;
