import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "../components/hero/tabs";
import TabsContent from "../components/hero/tabsContent";
import TabsImg from "../components/hero/tabsImg";

const Wrapper = styled.section``;

export default function Hero() {
  const [tab, setTab] = useState("drive");

  return (
    <Wrapper>
      <Tabs tab={tab} setTab={setTab} />
      <TabsContent tab={tab} />
      <TabsImg tab={tab} />
    </Wrapper>
  );
}
