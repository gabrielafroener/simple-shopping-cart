import * as types from "../constants";

const products = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_CATEGORIES:
      console.log(state);
      return {
        ...state,
        categories: action.categories
      };

    case types.RECEIVE_PRODUCTS:
      console.log(action);
      return {
        ...state,
        products: action.products
      };

    case types.GET_ALL_PRODUCTS:
      return state.products;

    case types.GET_ALL_CATEGORIES:
      return state.categories;

    default:
      return state;
  }
};

export default products;
