import React from 'react';
import { Main } from './containerStyle';

export const LRContainer: React.FC = ({ children }): JSX.Element => {
  return (
    <Main>
      {children}
    </Main>
  )
}