import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  border: 1px solid blue;
  width: 40%;

  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .dropdown-list {
    display: none;
  }
`;

export default function Nav() {
  return (
    <Wrapper className="nav">
      <ul className="nav-list">
        <li>
          <div className="nav-dropdown-container">
            Company
            <ul className="dropdown-list">
              <li>
                <a>item1</a>
              </li>
              <li>
                <a>item2</a>
              </li>
              <li>
                <a>item3</a>
              </li>
            </ul>
          </div>
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
    </Wrapper>
  );
}
