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
const addToCartUnsafe = product => ({
  type: types.ADD_TO_CART,
  product
});

export const addToCart = product => dispatch => {
  dispatch(addToCartUnsafe(product));
};

const removeFromCartUnsafe = product => ({
  type: types.REMOVE_FROM_CART,
  product
});

export const removeFromCart = product => dispatch => {
  dispatch(removeFromCartUnsafe(product));
};

const clearCartUnsafe = () => ({
  type: types.CLEAR_CART
});

export const clearCart = () => dispatch => {
  dispatch(clearCartUnsafe());
};

// TIMER

let timer = null;

export const startTimer = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: types.TIMER_START });
  dispatch(tick());
};

const tick = () => ({ type: types.TIMER_TICK });

export const stopTimer = () => {
  clearInterval(timer);
  return { type: types.TIMER_STOP };
};
