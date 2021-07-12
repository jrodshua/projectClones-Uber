import React from "react";
import styled from "styled-components";
import SideCta from "./sideCta";

const Wrapper = styled.nav`
  height: 100%;

  .sidebar-flex {
    display: flex;
    height: 100%;
    width: auto;
    position: relative;
    z-index: 6;
  }

  .sidebar-btn-container {
    margin: auto;
    width: auto;
    height: 100%;
    background: transparent;

    button {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border: none;
      border-radius: 50%;
      background: ${({ isShowing }) =>
        isShowing ? "rgb(84, 84, 84)" : "transparent"};

      :hover {
        background: #333333;
        border-radius: 50%;
        transition: background 0.2s ease-in;
      }

      :focus {
        outline: none;
      }
    }

    .menu-btn {
      margin-top: 1px;
      width: 18px;
      height: 2px;
      background: #fff;
      transform-origin: 4.5px;

      :first-child {
        transform: ${({ isShowing }) =>
          isShowing ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        transform: ${({ isShowing }) =>
          isShowing ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }

  .sidebar-list-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    margin-top: 70px;
    height: calc(100vh - 70px);
    background: #fff;
    color: #000;
    padding: 0 24px;
    z-index: 4;
    transition: all 0.4s ease;
    transform: ${({ isShowing }) =>
      !isShowing ? "translateY(-100%)" : "translateY(0)"};
    opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};
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
      <div className="sidebar-flex">
        <SideCta />
        <div className="sidebar-btn-container">
          <button onClick={() => setMenuShowing(!menuShowing)}>
            <div className="menu-btn" />
            <div className="menu-btn" />
          </button>
        </div>
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
