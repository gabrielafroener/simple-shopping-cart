import React, { useState, useEffect } from "react";
import { List, Icon, Modal } from "antd";
import { Redirect } from "react-router";
import { removeFromCart, addToCart, clearCart, stopTimer } from "../actions";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import "./styles/checkout.scss";

const CheckoutPage = ({
  products = [],
  timer = "stopped",
  removeFromCart,
  addToCart,
  clearCart,
  stopTimer
}) => {
  const [cartList, setCartList] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutState, setCheckoutState] = useState("disabled");
  const [timerCount, setTimerCount] = useState(timer);
  const [goHome, setGoHome] = useState(false);

  useEffect(() => {
    setCartList(products);

    let total = 0;
    products.forEach(p => {
      total = total + p.price * p.count;
    });
    setTotalPrice(total);

    if (products && products.length > 0) {
      setCheckoutState("checkout-button");
    } else {
      setCheckoutState("disabled");
      stopTimer();
      !goHome &&
        Modal.success({
          title: 'Click "Ok" to go back to the home page.',
          // content: 'Click "Ok" to go back to the home page.',
          onOk() {
            setGoHome(true);
          }
        });
    }
  }, [goHome, products, stopTimer]);

  timer === 0 && stopTimer() && clearCart();

  useEffect(() => {
    setTimerCount(timer);
  }, [timer]);

  const handleCheckout = () => {
    checkoutState === "checkout-button" &&
      Modal.success({
        title: "Done! Thank You (:",
        content: 'Click "Ok" to go back to the home page.',
        onOk() {
          clearCart();
          setGoHome(true);
        }
      });
  };

  const handleRemoveFromCart = item => {
    removeFromCart(item);
  };

  if (goHome) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <div className="checkout">
        <h1>CHECKOUT</h1>
        {timerCount !== "stopped" && <h2>Time Remaining: {timerCount}</h2>}
        <List
          className="list"
          bordered
          dataSource={cartList}
          pagination={true}
          renderItem={item =>
            item && (
              <List.Item className="list-item">
                <div className="count-section">
                  <Icon
                    type="minus-circle"
                    onClick={() => handleRemoveFromCart(item)}
                  />
                  {item.count}
                  <Icon type="plus-circle" onClick={() => addToCart(item)} />
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
            onClick={() => handleCheckout()}
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
    products: state.cart,
    timer: state.timer
  };
}

export default connect(mapStateToProps, {
  removeFromCart,
  addToCart,
  clearCart,
  stopTimer
})(CheckoutPage);
