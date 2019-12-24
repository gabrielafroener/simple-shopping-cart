import React from "react";
import { List, Button } from "antd";
import "./styles/customList.scss";

const CustomList = ({ items, btnFunc }) => {
  console.log(items);
  return (
    <div>
      {items && (
        <List
          className="list"
          bordered
          dataSource={items}
          pagination={true}
          renderItem={item =>
            item &&
            item.title && (
              <List.Item className="list-item">
                {item.title}
                {btnFunc && (
                  <Button
                    type="primary"
                    className="button"
                    onClick={() => btnFunc(item)}
                  >
                    Add to cart
                  </Button>
                )}
              </List.Item>
            )
          }
        />
      )}
    </div>
  );
};

export default CustomList;
