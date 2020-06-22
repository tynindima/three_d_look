import React, {FC, useEffect, useState} from 'react';
import './styles/product.scss';

interface Props {
  product: Product;
  handleAddBasket: (product: Product) => void,
}

const Product: FC<Props> = (props) => {
  const { product, handleAddBasket } = props;

  const [count, setCount] = useState(1);
  const [value, setValue] = useState(product.price);

  const newProduct = {...product, price: value};

  useEffect(() => {
    setValue(count * product.price);

    handleAddBasket(newProduct);
  }, [count, value]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  return (
    <div className="product">
      <div className="product__img-wrap">
        <img className="product__img" src={product.images[0]} alt={product.name}/>
      </div>
      <div className="product__info-box">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__counts">
          <div className="product__count">
            <button className="product__button" onClick={decrease} type="button">-</button>
            {count}
            <button className="product__button" onClick={increase} type="button">+</button>
          </div>
          <p className="product__price">{`$${value}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
