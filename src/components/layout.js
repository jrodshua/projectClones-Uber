import React from "react";
import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
  .layout-header-div {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    background: #000;
  }
`;

export default function Layout({ children }) {
  return (
    <Container>
      <div className="layout-header-div">
        <Header />
      </div>
      <main>{children}</main>
    </Container>
  );
}
