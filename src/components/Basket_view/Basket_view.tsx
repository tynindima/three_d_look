import React, {FC} from 'react';
import { connect } from 'react-redux';
import { toggleBasket } from '../../store/actionCreators';
import './style/basket_view.scss';

// @ts-ignore
import basketActive from './img/basket_active.svg';
// @ts-ignore
import basketInactive from './img/basket_inactive.svg';
import {State} from "../../store/store";



interface Props {
  basket: Product[];
  togglerBasket: (isBasket: boolean) => void;
}

const Basket_view: FC<Props> = (props) => {
  const { togglerBasket, basket} = props;

  const hundleTogglerBasket = () => {
    if (basket.length) {
      togglerBasket(true);
    }
  };

  return (
    <div className="basket_view">
      <img
        onClick={hundleTogglerBasket}
        className="basket_view__img"
        src={basket.length ? basketActive : basketInactive}
        alt="basket"
      />
      {basket.length
        ? <div className="basket_view__count">{basket.length}</div>
        : <div className="basket_view__count-zero" />}

    </div>
  );
};

const mapStateToPRops = (state: State) => ({
  basket: state.basket,
});

const mapDispatchToProps = {
  togglerBasket: toggleBasket,
};

export default connect(mapStateToPRops, mapDispatchToProps)(Basket_view);
