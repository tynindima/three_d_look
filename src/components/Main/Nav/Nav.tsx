import React, { FC } from 'react';

export const Nav: FC = () => {
  return (
    <nav className="main__nav">
      <ul>
        <li>Все</li>
        <li>Пальто</li>
        <li>Обувь</li>
        <li>Рубашки</li>
        <li>Брюки</li>
      </ul>
      <select name="types" id="">
        <option value="1">Сортировать</option>
        <option value="2">2</option>
      </select>
    </nav>
  );
};
