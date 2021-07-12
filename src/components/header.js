import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./nav/nav";
import Sidebar from "./sidebar/sidebar.js";

const Wrapper = styled.header`
  width: 100%;
  height: 100%;

  .header-index {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    background: #000;
    z-index: 5;
  }

  .header {
    width: 100%;
    height: 100%;
    background: #000;
    color: #fff;
    padding: 16px 0;
  }

  .header-container {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    height: 40px;
    border: 1px solid white;
  }

  .logo-container {
    position: relative;
    z-index: 6;

    a {
      font-size: 22px;
      letter-spacing: -0.5px;
      font-family: UberMoveText;
    }
  }

  .nav {
    display: none;
  }

  @media (min-width: 1140px) {
    .nav {
      display: block;
    }

    .sidebar {
      display: none;
    }
  }
`;

export default function Header() {
  const [menuShowing, setMenuShowing] = useState(false);

  return (
    <Wrapper>
      <div className="header-index"></div>
      <div className="header">
        <div className="header-container">
          <div className="logo-container">
            <a href="https://www.uber.com/">Uber</a>
          </div>
          <Nav />
          <Sidebar menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
        </div>
      </div>
    </Wrapper>
  );
}
