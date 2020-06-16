import React, {FC, useState} from 'react';
import { Slider } from './Slider';
import './styles/card.scss';

interface Props {
  product: Product;
}

const Card: FC<Props> = (props) => {
  const {
    id,
    name,
    images,
    type,
    price,
    count,
  } = props.product;

  const [img, setImg] = useState(images[0]);

  let activeImages = images.map((_v, i) => {
    if (i === 0) return {active: true};
    return {active: false};
  });

  const [checkets, setCheckets] = useState(activeImages);
  const [visible, setVisivle] = useState(false);

  const handleSelectImg = (img: string) => {
    setImg(img);
  };

  const togglerSlider = () => {
    setVisivle(!visible);
  };

  return (
    <div key={id} className="card">
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
        setCheckets={setCheckets}
        visible={visible}
      />
      <p className="card__type">{type}</p>
      <h3 className="card__name">{name}</h3>
      <h2 className="card__price">{`$${price}`}</h2>
      <p className="card__count">{`на складе: ${count}`}</p>
    </div>
  );
};

export default Card;
