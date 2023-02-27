import React from "react";
import logo from "../assets/truck.png";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useWebContext } from "../contexts/webContext";
import { links } from "../utilities/constants";
import CallUsSearch from "./CallUsSearch";
import styled from "styled-components";

const Navbar = () => {
  const { openSidebar } = useWebContext();

  const activate = ({ isActive }) => ({
    fontWeight: isActive && "900",
    borderBottom: isActive && "2px solid hsl(22, 31%, 52%)",
  });

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="delivery-service" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.url} style={activate}>
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <CallUsSearch />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;
  width: 100%;
  background: transparent;
  .nav-center {
    border: 1px solid var(--clr-grey-4);
    width: 90vw;
    margin: 0 auto;
    background-color: #fff;
    max-width: var(--max-width);
    border-radius: 8px;
    padding: 0.5rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .callus-search-wrapper {
    display: none;
  }
  @media screen and (min-width: 1104px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.2rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
        .active-tab {
          font-weight: 900;
          background-color: blue;
        }
      }
    }
    .callus-search-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
