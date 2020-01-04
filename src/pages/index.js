import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Select, List, Button } from "antd";
import { addToCart, startTimer } from "../actions";
import Layout from "../components/Layout";
import "./styles/index.scss";

const { Option } = Select;

const HomePage = ({
  products = [],
  categories = [],
  cart = [],
  addToCart,
  startTimer
}) => {
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleChange = value => {
    value === "All"
      ? setProductsList(products)
      : setProductsList(products.filter(p => p.idCategory === value));
  };

  const handleAddToCart = item => {
    cart.length === 0 && startTimer();
    addToCart(item);
  };

  return (
    <Layout>
      <div className="home">
        <Select className="select" defaultValue="All" onChange={handleChange}>
          {categories.map(category => (
            <Option value={category.id} key={category.id}>
              {category.title}
            </Option>
          ))}
          <Option value="All">All</Option>
        </Select>
        {productsList && (
          <List
            className="list"
            bordered
            dataSource={productsList}
            pagination={true}
            renderItem={item =>
              item &&
              item.title && (
                <List.Item className="list-item">
                  {item.title}
                  <Button
                    type="primary"
                    className="button"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </Button>
                </List.Item>
              )
            }
          />
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  categories: state.products.categories,
  cart: state.cart
});

export default connect(mapStateToProps, { addToCart, startTimer })(HomePage);
