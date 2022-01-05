import {createContext, useContext} from 'react';
export const StateContext = createContext();
import OrderModel from './lib/OrderModel.js';

export const useStateValue = () => useContext(StateContext);

export const globalState = {cart: []};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'push':
      return {...state, cart: state.cart.concat([new OrderModel(action.item)])};
    default:
      return state;
  }
};
