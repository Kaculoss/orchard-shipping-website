import React from "react";
import logo from "../assets/truck.png";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useWebContext } from "../contexts/webContext";
import { links } from "../utilities/constants";
import CallUsSearch from "./CallUsSearch";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useWebContext();

  const activate = ({ isActive }) => ({
    paddingLeft: isActive && "2.5rem",
    background: isActive && "hsl(212, 33%, 89%)",
    fontWeight: isActive && "900",
  });

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="delivery-service" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <NavLink to={url} onClick={closeSidebar} style={activate}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <CallUsSearch />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
    color: var(--clr-red-dark);
    &:hover {
      color: var(--clr-red-light);
    }
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);
      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .callus-search-wrapper {
    margin: 2rem auto;
    width: 250px;
  }
  @media screen and (min-width: 1024px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
