import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Badge, Popover } from "antd";
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

  const content = (
    <div>
      {products.map(p => (
        <p>{p.title}</p>
      ))}
    </div>
  );

  return (
    <div className="header">
      <Link to="/" className="logo">
        <Icon type="cloud" theme="filled" />
        <span style={{ padding: "0 .3em" }}> CLOUD STORE</span>
      </Link>
      <Link to="/checkout" className="cart-icon">
        <Popover content={content} placement="bottom">
          <Badge count={_count}>
            <Icon type="shopping-cart" className="icon" />
          </Badge>
        </Popover>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.cart
});

export default connect(mapStateToProps)(Header);
