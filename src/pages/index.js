import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Select } from "antd";
import { addToCart } from "../actions";
import Layout from "../components/Layout";
import CustomList from "../components/CustomList";
import "./styles/index.scss";

const { Option } = Select;

const HomePage = ({ products = [], categories = [], addToCart }) => {
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleChange = value => {
    value === "All"
      ? setProductsList(products)
      : setProductsList(products.filter(p => p.idCategory === value));
  };

  const _addToCart = item => {
    addToCart(item.id);
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
        <CustomList items={productsList} btnFunc={_addToCart} />
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  categories: state.products.categories
});

export default connect(mapStateToProps, { addToCart })(HomePage);
