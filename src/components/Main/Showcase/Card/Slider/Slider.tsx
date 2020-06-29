import React, {FC, useState} from 'react';
import cx from 'classnames';
import './styles/slider.scss';

// @ts-ignore
import leftBlack from './img/left_black.svg';
// @ts-ignore
import leftWhite from './img/left_white.svg';
// @ts-ignore
import rightBlack from './img/right_black.svg';
// @ts-ignore
import rightWhite from './img/right_white.svg';

export interface Active {
  active: boolean;
  id: number;
}

interface Props {
  images: string[],
  handleSelectImg: (img: string) => void;
  activeImages: Active[];
  setCheckets: (images: Active[]) => void;
  visible: boolean,
}

export const Slider: FC<Props> = (props) => {
  const {
    images,
    handleSelectImg,
    activeImages,
    setCheckets,
    visible,
  } = props;

  const [x, setX] = useState(0);
  const widthImg = 112.5;


  const goLeft = () => {
    if (x < 0) {
      setX(x + widthImg)
    }
  };

  const goRight = () => {
    if (-(images.length - 5) * widthImg < x) {
      setX(x - widthImg)
    }
  };

  const clickActive = (img: string, i: number) => {
    handleSelectImg(img);
    setCheckets(activeImages.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          active: true
        }
      }
      return {
        ...item,
        active: false
      };
    }));

  };

  return (
    <div
      style={visible ? {display: "flex"} : {display: "none"}}
      className="card__carusel slider">
      <button className="slider__button" type="button" onClick={goLeft} >
        <img src={x === 0 ? leftWhite : leftBlack} alt="left_black" />
      </button>
      <div className="slider__view">
        {images.map((img, i) => (
          <img
            className={cx("slider__img", {"slider__img__active": activeImages[i].active})}
            key={i}
            src={img}
            alt={`img ${i}`}
            style={{transform: `translateX(${x}%)`}}
            onClick={() => clickActive(img, i)}
          />
        ))}
      </div>
      <button className="slider__button" type="button" onClick={goRight}>
        <img
          src={x === -(images.length - 5) * widthImg || images.length < 5
          ? rightWhite
          : rightBlack} alt="right_black"
        />
      </button>
    </div>
  );
};
