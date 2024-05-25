// Imports
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

// styles of offcanvas container
export const OffcanvasContainer = styled(Offcanvas)`
  z-index: 100;
  position: fixed;
  width: 250px !important;
  flex-direction: column;
  background-color: #f1f5f9;
  gap: "20px";
  .offcanvas-body {
    .dropdown-item {
      margin: 10px 0;
      :hover {
      }
    }
  }
  // media query for smaller screens
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

// styles of header
export const Header = styled(Offcanvas.Header)`
  flex-direction: column;

  // styles of titles
  .offcanvas-title {
    margin-top: 20px;
    align-self: center;
    text-transform: uppercase;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;

// styles of add new tasks button
export const TaskBtn = styled(Button)`
  margin: 20px;

  width: 100%;
  border: none;

  :hover {
  }
  // media query for smaller screens
  @media only screen and (max-width: 767px) {
    margin: 20px 0;
  }
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  height: 32px;
  font-size: 15px;
  line-height: 17px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  align-items: center;
  position: relative;
  color: black;
  font-weight: 600;
  :hover {
    color: red;
    background-color: pink;
  }
  &.active {
    color: blue;
    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 4px;
      background-color: red !important;
    }
  }
`;
