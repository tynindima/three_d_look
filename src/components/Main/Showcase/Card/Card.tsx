import React, { FC, useState } from 'react';
import {connect} from 'react-redux';
import { Active, Slider } from './Slider';
import { NavLink } from 'react-router-dom';
import './styles/card.scss';
import {setSelectProduct} from "../../../../store/actionCreators";

interface Props {
  product: Product;
  setSelectedProduct: (product: Product) => void;
}

const Card: FC<Props> = ({ product, setSelectedProduct }) => {
  const {
    name,
    images,
    type,
    price,
    count,
  } = product;

  const [img, setImg] = useState(images[0]);

  let activeImages = images.map((_v, i) => {
    if (i === 0) return {active: true, id: i};
    return {active: false, id: i};
  });

  const [checkets, setCheckets] = useState(activeImages);
  const [visible, setVisivle] = useState(false);


  const handleClick = (images: Active[]) => {
    setCheckets(images);
  };

  const handleSelectImg = (img: string) => {
    setImg(img);
  };

  const togglerSlider = () => {
    setVisivle(!visible);
  };

  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          onClick={togglerSlider}
          className="card__img"
          src={img}
          alt="shirt1"
        />
      </div>
      <Slider
        images={images}
        handleSelectImg={handleSelectImg}
        activeImages={checkets}
        setCheckets={handleClick}
        visible={visible}
      />
      <p className="card__type">{type}</p>
      <h3 className="card__name">{name}</h3>
      <NavLink to="/page" className="card__link">
        <h2 onClick={() => setSelectedProduct(product)} className="card__price">{`$${price}`}</h2>
      </NavLink>
      <p className="card__count">{`на складе: ${count}`}</p>
    </div>
  );
};

const mapDispatchToProps = {
  setSelectedProduct: setSelectProduct,
};

export default connect(null, mapDispatchToProps)(Card);
