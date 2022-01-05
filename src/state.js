import {createContext, useContext} from 'react';
export const StateContext = createContext();
import OrderModel from './lib/OrderModel.js';

export const useStateValue = () => useContext(StateContext);

export const globalState = {cart: []};

const actions = {
  push(state, action) {
    const find = state.cart.find(d => d.product.id === action.item.id);
    if (find) {
      find.increase();
      return {...state};
    }
    return {
      ...state,
      cart: state.cart.concat([new OrderModel(action.item)]),
    };
  },
};

export const reducer = (state, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action);
  } else {
    return state;
  }
};
