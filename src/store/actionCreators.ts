import {
  SET_FILTER_TYPE,
  SET_SORT_FIELD,
  SELECT_PRODUCT,
  SET_IS_BASKET,
  SET_PRODUCT_TO_BASKET,
  SET_CLEAR_BASKET,
} from './types';

export const sortByType = (sortBy: string)=> ({type: SET_SORT_FIELD, sortBy: sortBy });
export const filterByType = (filterBy: string) => ({type: SET_FILTER_TYPE, filterBy });
export const setSelectProduct = (selectedProduct: Product) => ({type: SELECT_PRODUCT, selectedProduct});
export const toggleBasket = (isBasket: boolean) => ({type: SET_IS_BASKET, isBasket});
export const productToBasket = (product: Product) => ({type: SET_PRODUCT_TO_BASKET, product});
export const clearBasket = () => ({type: SET_CLEAR_BASKET});
