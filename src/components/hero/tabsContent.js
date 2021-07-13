import React from "react";
import styled from "styled-components";
import IconsTwo from "../../icons/iconsTwo";
import iconData from "../../icons/data";

const Wrapper = styled.div`
  .tabsContent-container {
    padding: 32px;
  }

  .tabsContent-container-text {
    h2 {
      font-size: 48px;
      line-height: 64px;
      font-weight: 600;
    }

    p {
      margin: 26px 0;
      line-height: 24px;
    }
  }

  .tabsContent-input-container {
    margin: 31px 0 44px;
    position: relative;

    input {
      width: 100%;
      padding: 11px 33px 11px 41px;
      line-height: 36px;
      background: #f6f6f6;
      border: none;

      ::placeholder {
        color: #6e6e6e;
        font-size: 17px;
      }
    }
  }

  .tabsContent-input-line {
    background: #000;
    width: 1px;
    height: 54px;
    position: absolute;
    top: 33px;
    left: 22px;
    bottom: 33px;

    :before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: transparent;
      border: 1px solid #000;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      left: -3px;
    }

    :after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: transparent;
      border: 1px solid #000;
      position: absolute;
      left: -3px;
      bottom: -10px;
    }
  }

  .tabsContent-input-svg {
    background: #f6f6f6;

    svg {
      position: absolute;
      right: 20px;
      top: 25px;
      width: 16px;
      height: 16px;
      opacity: 0.2;

      :hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  .tabs-input1 {
    display: flex;
    align-items: center;
  }

  .tabs-input2 {
    margin-top: 8px;
  }

  .tabsContent-cta-container {
    display: flex;
    gap: 24px;
  }

  .tabsContent-btn {
    padding: 16px 25px;
    margin-top: 12px;
    background: #000;
    color: #fff;
    font-weight: bold;

    :hover {
      background: #333333;
    }
  }

  .tabsContent-btn2 {
    background: #eeeeee;
    color: #000;

    :hover {
      background: #e2e2e2;
    }
  }

  .tabsContent-cta-link {
    margin-top: 12px;
    padding-top: 6px;

    a {
      display: block;
      line-height: 30px;
      border-bottom: 1px solid #cbcbcb;
    }
  }
`;

const tabsData = {
  drive: {
    h2: "Get in the driver's seat and get paid",
    p: "Drive on the platform with the largest network of active riders.",
    btn: "Sign up to drive",
    link: "Learn more about driving and delivering",
  },
  eat: {
    h2: "Discover delicious eats",
    p: "Order delivery from restaurants you love.",
    btn: "Order now",
    link: "Own a restaurant? Partner with Uber Eats",
  },
  ride: {
    h2: "Request a ride now",
    input1: "Enter pickup location",
    input2: "Enter destination",
    btn: "Request now",
    btn2: "Schedule for later",
  },
};

export default function TabsContent({ tab }) {
  let content;
  if (tab === "drive") {
    content = tabsData.drive;
  } else if (tab === "eat") {
    content = tabsData.eat;
  } else {
    content = tabsData.ride;
  }

  const { navArrow } = iconData;

  return (
    <Wrapper>
      <div className="tabsContent-container">
        <div className="tabsContent-container-text">
          <h2>{content.h2}</h2>
          {tab === "ride" ? "" : <p>{content.p}</p>}
        </div>
        {tab === "ride" ? (
          <div className="tabsContent-input-container">
            <div className="tabs-input1">
              <input type="text" placeholder={content.input1} />
              <div className="tabsContent-input-svg">
                <IconsTwo
                  w={navArrow.w}
                  h={navArrow.h}
                  v={navArrow.v}
                  p={navArrow.p}
                />
              </div>
            </div>
            <div className="tabs-input2">
              <input type="text" placeholder={content.input2} />
            </div>
            <div className="tabsContent-input-line"></div>
          </div>
        ) : (
          ""
        )}
        <div className="tabsContent-cta-container">
          <a href="/" className="tabsContent-btn">
            {content.btn}
          </a>
          {tab === "ride" ? (
            <a href="/" className="tabsContent-btn tabsContent-btn2">
              {content.btn2}
            </a>
          ) : (
            <div className="tabsContent-cta-link">
              <a href="/">
                <span>{content.link}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
