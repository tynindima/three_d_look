import React, { FC } from 'react';

import './styles/header.scss';
// @ts-ignore
import main_header from './img/main_header.png';
import Basket_view from "../Basket_view/Basket_view";

const Header: FC = () => {
  return (
    <header className="header">
      <img className="header__main-img" src={main_header} alt="shop name" />
      <div className="header__basket-container">
        <Basket_view />
      </div>
    </header>
  );
};

export default Header;
