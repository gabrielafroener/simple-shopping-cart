import React from "react";
import Header from "./Header";

import "./styles/layout.scss";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
  </div>
);

export default Layout;
