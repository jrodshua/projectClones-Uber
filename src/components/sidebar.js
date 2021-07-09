import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  margin-left: 1rem;

  .sidebar-btn-container {
    width: 24px;
    height: 20px;
    background: transparent;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border: none;
    }

    .menu-btn {
      width: 14px;
      height: 2px;
      background: #fff;
    }
  }

  .sidebar-list-container {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid blue;
    width: 100vw;
    margin-top: 64px;
    height: calc(100vh - 64px);
    background: #fff;
    color: #000;
    padding: 0 24px;
    display: ${({ isShowing }) => (!isShowing ? "none" : "block")};
    transition: all 0.3s ease-in-out;
    transform: ${({ isShowing }) =>
      !isShowing ? "translateY(-100%)" : "translateY(0%)"};
  }

  .sidebar-list {
    li {
      font-size: 32px;
      margin: 16px 0;
      line-height: 3rem;
      font-weight: 500;
    }
  }

  .sidebar-products-block {
    margin: 64px 0 24px;

    button {
      padding: 14px 16px;
      width: 100%;
      background: #eee;
      border: none;
      font-weight: 500;
    }
  }

  .sidebar-lang-btn {
    margin-top: 12px;

    button {
      border: none;
      font-weight: 500;
    }
  }

  .sidebar-dropdown {
    display: none;
  }
`;

export default function Sidebar({ menuShowing, setMenuShowing }) {
  return (
    <Wrapper className="sidebar" isShowing={menuShowing}>
      <div className="sidebar-btn-container">
        <button onClick={() => setMenuShowing(!menuShowing)}>
          <div className="menu-btn" />
          <div className="menu-btn" />
        </button>
      </div>
      <div className="sidebar-list-container">
        <ul className="sidebar-list">
          <li className="sidebar-dropdown-parent">
            Company
            <ul className="sidebar-dropdown">
              <li>
                <a>Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Safety</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>COVID-19 resources</a>
          </li>
        </ul>
        <div className="sidebar-products-block">
          <button>Products</button>
        </div>
        <div className="sidebar-lang-btn">
          <button>icon EN</button>
        </div>
      </div>
    </Wrapper>
  );
}
