import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const tabImg = {
  drive: {
    i: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1920,h_1080/v1613521458/assets/50/5688e1-c494-47b9-9e9a-e13d45de5eb8/original/Earner_Home_bg_tablet.png",
    a: "Get in the driver's seat and get paid",
  },
  eat: {
    i: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1920,h_1080/v1613521596/assets/5a/a8230b-b6ec-4123-a042-6adc0a31a788/original/Eats_Home_bg_tabletpng.png",
    a: "Eaters opening order",
  },
  ride: {
    i: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1920,h_1080/v1613521717/assets/7a/fd8982-6884-49b9-bb5f-28e6ff2cc0e8/original/Rider_Home_bg_tablet.png",
    a: "Rider getting into car",
  },
};

export default function TabsImg({ tab }) {
  let content;
  if (tab === "drive") {
    content = tabImg.drive;
  } else if (tab === "eat") {
    content = tabImg.eat;
  } else {
    content = tabImg.ride;
  }

  return (
    <Wrapper>
      <div>
        <img src={content.i} alt={content.a} />
      </div>
    </Wrapper>
  );
}
