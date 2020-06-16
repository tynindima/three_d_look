import { Action, createStore } from 'redux';

import products from '../api/products.json';

const FILTERED_SHIRT = 'FILTERED_SHIRT';

export const filterOfShirt = () => ({ type: FILTERED_SHIRT });

export interface State {
  products: Product[];
}

const initialState = {
  products,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FILTERED_SHIRT:
      return {
        ...state,
        products: state.products.filter(product => product.type === 'рубашки'),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
