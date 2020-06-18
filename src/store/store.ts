import {AnyAction, createStore} from 'redux';
import products from '../api/products.json';
import {SET_FILTER_TYPE, SET_SORT_FIELD} from './types';

export interface State {
  products: Product[];
  sortBy: string;
  filterBy: string;
}

const initialState = {
  products,
  sortBy: 'new',
  filterBy: '',
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
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
