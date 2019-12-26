import React, { useState, useEffect } from "react";
import { List, Icon } from "antd";
import { removeFromCart, addToCart } from "../actions";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import "./styles/checkout.scss";

const CheckoutPage = ({ products = [], removeFromCart, addToCart }) => {
  const [cartList, setCartList] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartList(products);
    let total = 0;
    products.forEach(p => {
      total = total + p.price * p.count;
    });
    setTotalPrice(total);
  }, [products]);

  return (
    <Layout>
      <div className="checkout">
        <List
          className="list"
          bordered
          dataSource={cartList}
          pagination={true}
          renderItem={item =>
            item && (
              <List.Item className="list-item">
                <div className="count-section">
                  <Icon type="plus-circle" onClick={() => addToCart(item)} />
                  {item.count}
                  <Icon
                    type="minus-circle"
                    onClick={() => removeFromCart(item)}
                  />
                </div>
                {item.title}
                <div className="price">
                  {`$${(item.price * item.count).toFixed(2)}`}
                </div>
              </List.Item>
            )
          }
        />
        <div className="total-section">{`TOTAL: $${totalPrice}`}</div>
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: state.cart
  };
}

export default connect(mapStateToProps, { removeFromCart, addToCart })(
  CheckoutPage
);
