import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Badge } from "antd";
import { connect } from "react-redux";

import "./styles/layout.scss";

const Header = ({ count = 0 }) => {
  const [_count, setCount] = useState(count);

  useEffect(() => {
    setCount(count);
  }, [count]);

  return (
    <div className="header">
      <Link to="/" className="logo">
        <Icon type="cloud" theme="filled" />
      </Link>
      <Link to="/checkout" className="cart-icon">
        <Badge count={_count}>
          <Icon type="shopping-cart" className="icon" />
        </Badge>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.cart && state.cart.length
});

export default connect(mapStateToProps)(Header);
