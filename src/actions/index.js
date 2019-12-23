import { getProducts, getCategories } from "../api";
import * as types from "../constants";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const receiveAllProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories
});

export const receiveAllCategories = () => dispatch => {
  getCategories(categories => {
    dispatch(receiveCategories(categories));
  });
};

export const getAllProducts = {
  type: types.GET_ALL_PRODUCTS
};

export const getAllCategories = {
  type: types.GET_ALL_CATEGORIES
};
