import {SET_FILTER_TYPE, SET_SORT_FIELD} from './types';

export const sortByType = (sortBy: string)=> ({type: SET_SORT_FIELD, sortBy: sortBy });
export const filterByType = (filterBy: string) => ({type: SET_FILTER_TYPE, filterBy });
