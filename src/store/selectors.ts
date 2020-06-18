import { State } from "./store";
import { createSelector} from 'reselect';

export const getVisibleProducts = createSelector(
  [
    (state: State) => state.products,
    (state: State) => state.sortBy,
    (state: State) => state.filterBy,

  ],
  ( products, sortBy, filterBy ) => {
    //const { products, sortBy, filterBy } = state;
    let visibleProducts = [...products];

    switch (sortBy) {
      case 'new':
        visibleProducts.sort((a,b) => a.id - b.id);
        break;
      case 'expensive':
        visibleProducts.sort((a,b) => b.price - a.price);
        break;
      case 'cheap':
        visibleProducts.sort((a,b) => a.price - b.price);
        break;
      case 'popular':
        visibleProducts.sort((a,b) => a.count - b.count);
        break;
      default:
        break;
    }

    switch (filterBy) {
      case 'Обувь':
        visibleProducts = visibleProducts.filter(product => product.type === 'Обувь');
        break;
      case 'Рубашки':
        visibleProducts = visibleProducts.filter(product => product.type === 'Рубашки');
        break;
      case 'Пальто':
        visibleProducts = visibleProducts.filter(product => product.type === 'Пальто');
        break;
      case 'Брюки':
        visibleProducts = visibleProducts.filter(product => product.type === 'Брюки');
        break;
      default:
        break;
    }

    return visibleProducts;

  }
);
