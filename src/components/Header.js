import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import "./styles/layout.scss";

export default () => (
  <div className="header">
    <Link to="/" className="logo">
      <Icon type="cloud" theme="filled" />
    </Link>
    <Link to="/checkout" className="cart-icon">
      <Icon type="shopping-cart" />
    </Link>
  </div>
);
