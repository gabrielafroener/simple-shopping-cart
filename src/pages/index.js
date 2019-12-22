import React, { useState } from "react";
import { List, Select, Button } from "antd";
import Layout from "../components/Layout";
import { products, categories } from "../api";
import "./styles/index.scss";

const { Option } = Select;

export default () => {
  const [productsList, setProductsList] = useState(products);

  const handleChange = value => {
    value === "All"
      ? setProductsList(products)
      : setProductsList(products.filter(p => p.idCategory === value));
  };

  return (
    <Layout>
      <div className="home">
        <Select className="select" defaultValue="All" onChange={handleChange}>
          {categories.map(category => (
            <Option value={category.id}>{category.title}</Option>
          ))}
          <Option value="All">All</Option>
        </Select>

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
                <Button type="primary" className="button">
                  Add to cart
                </Button>
              </List.Item>
            )
          }
        />
      </div>
    </Layout>
  );
};
