import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Sidebar from "./sidebar";
import NavCta from "./navCta";

const Wrapper = styled.header`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  background: #000;
  color: #fff;

  .header-container {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo-container {
    a {
      font-size: 20px;
    }
  }

  .nav {
    display: none;
  }

  .cta-side-container {
    display: flex;
    align-items: center;
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
      <div className="header-container">
        <div className="logo-container">
          <a href="https://www.uber.com/">Uber</a>
        </div>
        <Nav />
        <div className="cta-side-container">
          <NavCta />
          <Sidebar menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
        </div>
      </div>
    </Wrapper>
  );
}
