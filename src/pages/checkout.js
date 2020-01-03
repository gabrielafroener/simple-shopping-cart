import React, { useState, useEffect } from "react";
import { List, Icon, Modal } from "antd";
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

  const openModal = () => {
    Modal.success({
      content: "Done! Thank You (:"
    });
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
          <div className="total checkout-button" onClick={() => openModal()}>
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

export default connect(mapStateToProps, { removeFromCart, addToCart })(
  CheckoutPage
);
