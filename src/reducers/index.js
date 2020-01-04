import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import timer from "./timer";

export default combineReducers({
  cart,
  products,
  timer
});
