import React, { FC } from 'react';
import { Nav } from './Nav';
import {Showcase} from './Showcase';

import './styles/main.scss'



export const Main: FC = () => {
  return (
    <main className="main">
      <Nav />
      <Showcase />
    </main>
  );
};
