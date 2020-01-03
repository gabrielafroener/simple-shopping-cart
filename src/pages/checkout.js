import React, { useState, useEffect } from "react";
import { List, Icon, Modal } from "antd";
import { removeFromCart, addToCart, clearCart } from "../actions";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import "./styles/checkout.scss";

const CheckoutPage = ({
  products = [],
  removeFromCart,
  addToCart,
  clearCart
}) => {
  const [cartList, setCartList] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutState, setCheckoutState] = useState("disabled");

  useEffect(() => {
    setCartList(products);
    let total = 0;
    products.forEach(p => {
      total = total + p.price * p.count;
    });
    setTotalPrice(total);
    products && products.length > 0
      ? setCheckoutState("checkout-button")
      : setCheckoutState("disabled");
  }, [products]);

  const handleCkechout = () => {
    checkoutState === "checkout-button" &&
      Modal.success({
        content: "Done! Thank You (:"
      });
    clearCart();
  };

  return (
    <Layout>
      <div className="checkout">
        <h1>CHECKOUT</h1>
        <h2>Tempo restante: {}</h2>
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

        <div className="checkout-section">
          <div className="total">{`TOTAL: $${totalPrice.toFixed(2)}`}</div>
          <div
            className={`total ${checkoutState}`}
            onClick={() => handleCkechout()}
          >
            CHECKOUT
          </div>
        </div>
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: state.cart
  };
}

export default connect(mapStateToProps, {
  removeFromCart,
  addToCart,
  clearCart
})(CheckoutPage);
