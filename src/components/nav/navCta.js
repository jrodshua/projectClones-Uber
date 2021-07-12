import React from "react";
import styled from "styled-components";
import Icons from "../icons/icons";
import iconData from "../icons/data";

const Wrapper = styled.div`
  height: 100%;
  max-height: 100%;
  padding: 4px;
  width: 100px;

  .cta-show {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;

    button {
      background: #fff;
      color: #000;
      border-radius: 30px;
      padding: 0 12px;
      font-size: 14px;
    }
  }

  .svg {
    border: 1px solid green;
    max-width: 100%;
    height: 40px;
    width: 40px;
    fill: #fff;
  }
`;

export default function NavCta() {
  const { avtr } = iconData;

  return (
    <Wrapper>
      <div className="cta-desktop"></div>
      <div className="cta-show">
        <Icons f={avtr.f} c={avtr.c} p={avtr.p} />
        <button>Sign up</button>
      </div>
    </Wrapper>
  );
}
