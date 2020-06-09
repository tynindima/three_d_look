import React from 'react';

import './styles/header.scss';


// @ts-ignore
import main_header from './img/main_header.png';

// @ts-ignore
import basket from './img/basket.svg';

export const Header = () => {
  return (
    <header className="header">
      <img className="header__main-img" src={main_header} alt="shop name"/>
      <div className="header__basket-wrap">
        <img className="header__basket-img" src={basket} alt="basket"/>
        <div className="header__basket-count">2</div>
      </div>
    </header>
  );
};
