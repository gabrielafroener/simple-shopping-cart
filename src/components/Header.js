import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Badge } from "antd";
import { connect } from "react-redux";

import "./styles/layout.scss";

const Header = ({ products = [] }) => {
  const [_count, setCount] = useState(0);

  useEffect(() => {
    let total = 0;
    products.forEach(p => {
      total = total + p.count;
    });
    setCount(total);
  }, [products]);

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
  products: state.cart
});

export default connect(mapStateToProps)(Header);
