import { getProducts, getCategories } from "../api";
import * as types from "../constants";

// PRODUCTS
const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const receiveAllProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

export const getAllProducts = {
  type: types.GET_ALL_PRODUCTS
};

// CATEGORIES
const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories
});

export const receiveAllCategories = () => dispatch => {
  getCategories(categories => {
    dispatch(receiveCategories(categories));
  });
};

export const getAllCategories = {
  type: types.GET_ALL_CATEGORIES
};

// CART
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = productId => dispatch => {
  dispatch(addToCartUnsafe(productId));
};

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
});

export const removeFromCart = productId => dispatch => {
  dispatch(removeFromCartUnsafe(productId));
};
