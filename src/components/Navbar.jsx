import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Gideon</h4>
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family:  sans-serif;

      }
    }
  }
`;
