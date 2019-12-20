import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import "./styles/header.scss";

export default () => (
  <div className="header">
    <Link to="/" className="logo">
      <span>Logo</span>
    </Link>
    <Link to="/checkout" className="cart-icon">
      <Icon type="shopping-cart" />
    </Link>
  </div>
);
