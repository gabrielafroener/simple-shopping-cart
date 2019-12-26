import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { removeFromCart } from "../actions";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import "./styles/checkout.scss";

const CheckoutPage = ({ products = [], removeFromCart }) => {
  const [cartList, setCartList] = useState(products);

  useEffect(() => setCartList(products), [products]);

  const _removeFromCart = item => {
    removeFromCart(item);
    // setCartList(cartList.splice(cartList.indexOf(  item), 1));
  };

  console.log(cartList);

  return (
    <Layout>
      <div className="checkout">
        <List
          className="list"
          bordered
          dataSource={cartList}
          pagination={true}
          renderItem={item =>
            item &&
            item.title && (
              <List.Item className="list-item">
                {item.title}
                <Button
                  type="primary"
                  className="button"
                  onClick={() => _removeFromCart(item)}
                >
                  Remove from cart
                </Button>
              </List.Item>
            )
          }
        />
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: state.cart
  };
}

export default connect(mapStateToProps, { removeFromCart })(CheckoutPage);
