import React, { FC } from 'react';
import Nav from './Nav/Nav';
import Showcase from './Showcase/Showcase';


import './styles/main.scss';


export const Main: FC = () => {
  return (
    <main className="main">
      <Nav />
      <Showcase />
    </main>
  );
};
