import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .tabs-container {
    display: flex;
  }

  .tabs-container-btn {
    width: 105px;
    height: 135px;
    padding: 28px 12px 20px;
    border: none;

    :focus {
      outline: none;
    }
  }

  .tabs-container-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: bold;
  }

  .tabs-img-container {
  }

  .tabs-bottom-border {
    width: 80%;
    margin: 0 auto;
    border-bottom: 5px solid #000;
    transform: ${({ tab }) =>
      tab === "drive"
        ? "translateX(0)"
        : tab === "eat"
        ? "translateX(105px)"
        : "translateX(210px)"};
    transition: transform 0.25s ease-out;
  }
`;

export default function Tabs({ tab, setTab }) {
  return (
    <Wrapper tab={tab}>
      <div className="tabs-container">
        <div className="tabs-container-div">
          <button
            href="/"
            className="tabs-container-btn"
            value="drive"
            onClick={() => setTab("drive")}
          >
            <div className="tabs-container-item">
              <div className="tabs-img-container">
                <img
                  src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"
                  alt="Earn"
                />
              </div>
              <span>Drive or deliver</span>
            </div>
          </button>
          <div className="tabs-bottom-border" />
        </div>
        <button
          href="/"
          className="tabs-container-btn"
          value="eat"
          onClick={() => setTab("eat")}
        >
          <div className="tabs-container-item">
            <div className="tabs-img-container">
              <img
                src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg"
                alt="Restaurant location"
              />
            </div>
            <span>Eat</span>
          </div>
        </button>
        <button
          href="/"
          className="tabs-container-btn"
          value="ride"
          onClick={() => setTab("ride")}
        >
          <div className="tabs-container-item">
            <div className="tabs-img-container">
              <img
                src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"
                alt="car"
              />
            </div>
            <span>Ride</span>
          </div>
        </button>
      </div>
    </Wrapper>
  );
}
