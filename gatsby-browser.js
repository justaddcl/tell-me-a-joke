import React from 'react';
import { JokeProvider } from './src/context/JokeContext';

export const wrapRootElement = ({ element }) => (
  <JokeProvider>{element}</JokeProvider>
);
