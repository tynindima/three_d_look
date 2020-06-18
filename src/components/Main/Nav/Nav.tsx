import React, {FC, useState} from 'react';
import { connect} from 'react-redux';
import './style/nav.scss';

import {filterByType, sortByType} from '../../../store/actionCreators';

// @ts-ignore
import arrowUp from './img/arrow_up.svg';
// @ts-ignore
import arrowDown from './img/arrow_down.svg';


interface Props {
  sortByTypes: (sortBy: string) => void;
  filterByTypes: (filterBy: string) => void;
}

const Nav: FC<Props> = (props) => {
  const { sortByTypes, filterByTypes } = props;

  const [toggle, setToggle] = useState(false);

  const handleOpenSort = () => {
    setToggle(!toggle);
  };


  return (
    <nav className="nav">
      <ul className="nav__list">
        <li onClick={() => filterByTypes('')} className="nav__item">Все</li>
        <li onClick={() => filterByTypes('Пальто')} className="nav__item">Пальто</li>
        <li onClick={() => filterByTypes('Обувь')} className="nav__item">Обувь</li>
        <li onClick={() => filterByTypes('Рубашки')} className="nav__item">Рубашки</li>
        <li onClick={() => filterByTypes('Брюки')} className="nav__item">Брюки</li>
        <li onClick={handleOpenSort}  className="nav__item"  >
          Сортировать
          <img
            className="nav__arrow"
            src={toggle ? arrowUp : arrowDown}
            alt="down"
          />
        </li>
      </ul>
      <div className="nav_sort-container" style={toggle ? {display: "block"} : {display: "none"} }>
        <ul className="nav__sort">
          <li
            onClick={() => sortByTypes('expensive')}
            className="nav__sorted-item"
          >
            От дорогих к дешевым
          </li>
          <li
            onClick={() => sortByTypes('cheap')}
            className="nav__sorted-item"
          >
            От дешевых к дорогим
          </li>
          <li
            onClick={() => sortByTypes('popular')}
            className="nav__sorted-item"
          >
            Популярные
          </li>
          <li
            onClick={() => sortByTypes('new')}
            className="nav__sorted-item"
          >
            Новые
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  sortByTypes: sortByType,
  filterByTypes: filterByType,
};

export default connect(null, mapDispatchToProps)(Nav);
