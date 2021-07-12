import React from "react";
import styled from "styled-components";
import Icons from "../../icons/icons";
import iconData from "../../icons/data";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: auto;

  .side-cta-item1 {
    padding-right: 4px;

    button {
      padding: 10px;
      border: none;

      :hover {
        background: #333333;
        border-radius: 50%;
        transition: background 0.2s ease-in;
      }
    }

    svg {
      fill: #fff;
    }
  }

  .side-cta-item2 {
    padding-right: 4px;

    button {
      background: #fff;
      color: #000;
      padding: 10px 12px;
      border-radius: 30px;
      font-family: UberMoveText;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;

      :hover {
        background: #e2e2e2;
        transition: background 0.2s ease-in;
      }
    }
  }
`;

export default function sideCta() {
  const { avtr } = iconData;

  return (
    <Wrapper>
      <li className="side-cta-item1">
        <button>
          <Icons f={avtr.f} c={avtr.c} p={avtr.p} />
        </button>
      </li>
      <li className="side-cta-item2">
        <button>Sign up</button>
      </li>
    </Wrapper>
  );
}
