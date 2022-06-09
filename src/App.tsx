import React from 'react';

import { GlobalStyle } from './globals/globalStyles';

import { LRHeader } from './components/LRHeader';
import { LRFooter } from './components/LRFooter';
import { LRRouter } from './routes';
import { LRContainer } from './components/LRContainer';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <LRHeader />
      <LRContainer>
        <LRRouter />
      </LRContainer>
      <LRFooter />
    </>
  );
};