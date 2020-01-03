import * as types from "../constants";

const cart = (state = [], action) => {
  let newState;
  let product;

  switch (action.type) {
    case types.ADD_TO_CART:
      newState = [...state];
      product = action.product;

      if (state.length > 0) {
        let found = false;

        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === action.product.id) {
            newState[i].count++;
            found = true;
          }
        }
        if (!found) {
          product.count = 1;
          newState.push(product);
        }
      } else {
        product.count = 1;
        newState.push(product);
      }

      return newState;

    case types.REMOVE_FROM_CART:
      newState = [...state];
      product = action.product;

      newState.map(s => {
        if (s.id === product.id) {
          s.count--;
          if (s.count === 0) {
            newState.splice(newState.indexOf(s), 1);
          }
        }
      });

      return newState;

    case types.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cart;
