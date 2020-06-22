import React, {FC} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/page.scss';
import {State} from "../../store/store";
// @ts-ignore
import main_header from '../Header/img/main_header.png';
// @ts-ignore
import basket from '../Header/img/basket.svg';
// @ts-ignore
import arrowBack from './img/arrow_back.svg';
import {productToBasket} from "../../store/actionCreators";
import Basket_view from "../Basket_view/Basket_view";

interface Props {
  product: Product;
  basket: Product[];
  getProduct: (product: Product) => void;
}

const Page: FC<Props> = ({product, getProduct, basket}) => {
  const {
    name,
    type,
    images,
    description,
    color,
    structure,
    care,
    vendor_code,
    sizes,
    addition,
  } = product;

  const handleBuy = (product: Product) => {
    let check = basket.some(item => item.id === product.id);

    if (!check) {
      getProduct(product);
    }
  };

  return (
    <div className="page">
      <div className="page__img-container">
        <img className="page__img" src={images[0]} alt="img" />
      </div>
      <div className="page__desc">
        <div className="top">
          <img className="top__main-img" src={main_header} alt="shop name"/>
          <Basket_view />
        </div>
        <div className="page__back-container">
          <NavLink to="/" className="page__link">
            <img className="page__back-arrow" src={arrowBack} alt="back"/>
            Назад
          </NavLink>
        </div>
        <p className="page__type">{type}</p>
        <h3 className="page__name">{name}</h3>
        <button
          onClick={() => handleBuy(product)}
          className="page__basket button_main"
        >
          В корзину
        </button>
        <div className="page__text-container">
          <p className="page__description">{description}</p>
          <div className="page__info-box">
            <div className="page__info-name">
              <p className="page__info-text">Цвет:</p>
              <p className="page__info-text">Состав:</p>
              <p className="page__info-text">Уход:</p>
              <p className="page__info-text">Артикул:</p>
            </div>
            <div className="page__info-desc">
              <p className="page__info-text">{color}</p>
              <p className="page__info-text">{structure}</p>
              <p className="page__info-text">{care}</p>
              <p className="page__info-text">{vendor_code}</p>
            </div>
          </div>
        </div>
        <p className="page__description indent_top-40">{sizes}</p>
        <p className="page__description indent_top-40">{addition}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  product: state.selectedProduct,
  basket: state.basket,
});

const mapDispatchToProps = {
  getProduct: productToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
