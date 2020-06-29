import {AnyAction, createStore} from 'redux';
import products from '../api/products.json';
import {
  SELECT_PRODUCT,
  SET_FILTER_TYPE,
  SET_IS_BASKET,
  SET_SORT_FIELD,
  SET_PRODUCT_TO_BASKET,
  SET_CLEAR_BASKET,
  SET_IS_BUYED,
} from './types';

export interface State {
  products: Product[];
  sortBy: string;
  filterBy: string
  selectedProduct: Product;
  isBasket: boolean;
  basket: Product[];
  isBuyed: boolean;
}

const initialState = {
  products,
  sortBy: 'new',
  filterBy: '',
  selectedProduct: products[0],
  isBasket: false,
  basket: [],
  isBuyed: false,
};

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SORT_FIELD:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterBy: action.filterBy,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.selectedProduct,
      };
    case SET_IS_BASKET:
      return {
        ...state,
        isBasket: action.isBasket,
      };
    case SET_PRODUCT_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.product],
      };
    case SET_CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };
    case SET_IS_BUYED:
      return {
        ...state,
        isBuyed: action.isBuyed,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
