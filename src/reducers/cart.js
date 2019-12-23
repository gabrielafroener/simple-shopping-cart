import * as types from "../constants";

const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const newState = state.concat(action.productId);
      return newState;

    case types.REMOVE_FROM_CART:
      if (
        (action.productId && state.find(i => i === action.productId)) !==
        undefined
      ) {
        const newState = [...state];
        newState.splice(state.indexOf(action.productId), 1);

        return newState;
      } else return state;

    default:
      return state;
  }
};

export default cart;
