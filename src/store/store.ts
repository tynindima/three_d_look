import {Action, createStore} from 'redux';

import products from '../../public/api/products.json';

const FILTERED_SHIRT = 'FILTERED_SHIRT'

export const filterOfShirt = () => ({type: FILTERED_SHIRT});

const initialState = {
  products: products,
};

const reducer = (state, action: Action) => {
  switch (action.type) {
    case FILTERED_SHIRT:
      return {
        ...state,
        products: products.filter(product => product.type === 'рубашки'),
      }
  }
};

export const store = createStore(reducer, initialState);
