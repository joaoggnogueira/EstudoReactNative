import {createContext, useContext} from 'react';
export const StateContext = createContext();
import OrderModel from './lib/OrderModel.js';

export const useStateValue = () => useContext(StateContext);

export const globalState = {cart: []};

const actions = {
  pop(state, action) {
    const find = state.cart.find(d => d.product.id === action.item.id);
    find.decrease();
    if (find.quantity === 0) {
      state.cart.splice(state.cart.indexOf(find), 1);
    }
    return {...state};
  },
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
