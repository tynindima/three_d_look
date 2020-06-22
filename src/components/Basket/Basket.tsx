import React, {FC, useState} from 'react';
import { connect } from 'react-redux';
import './styles/basket.scss';
import { State } from '../../store/store';
import { clearBasket, toggleBasket } from '../../store/actionCreators';
// @ts-ignore
import close from './img/close.svg';
import Product from "./Product/Product";

interface Props {
  isBasket: boolean;
  togglerBasket: (isBasket: boolean) => void;
  basket: Product[];
  toClear: () => void;
}

const Basket: FC<Props> = (props) => {
  const { isBasket, togglerBasket, basket, toClear } = props;

  const [countedBasket, setCountedBasket] = useState(basket);
  console.log(countedBasket);
  console.log(basket);


  const handleAddBasket = (product: Product) => {
    setCountedBasket(basket.map(item => {
      if (item.id === product.id) {
        return product;
      }

      return item;
    }))
  };


  let total = countedBasket.reduce((acc, item) => acc + item.price, 0);

  if (!basket.length) {
    total = 0;
  }

  return (
    <>
      <div className="basket" style={isBasket ? {display: "block"} : {display: "none"}}>
        <button
          onClick={() => togglerBasket(false)}
          className="basket__close"
          type="button"
        >
          <img src={close} alt="close"/>
        </button>

        <div className="basket__container">
          {basket.map(product => (
            <Product key={product.id} product={product} handleAddBasket={handleAddBasket} />
            )
          )}
        </div>
        <div className="basket__total total">
          <p className="total__name">Итого</p>
          <p className="tatal__price">{`$${total}`}</p>
        </div>
        <button
          onClick={toClear}
          className="basket__button button_main"
          type="button"
        >
          Купить
        </button>
      </div>

      <div className="basket-left" style={isBasket ? {display: "block"} : {display: "none"}} />
    </>

  );
};

const mapStateToProps = (state: State) => ({
  isBasket: state.isBasket,
  basket: state.basket,
});

const mapDispatchToProps = {
  togglerBasket: toggleBasket,
  toClear: clearBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
