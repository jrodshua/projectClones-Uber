import React from "react";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout-header-div">
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
}
