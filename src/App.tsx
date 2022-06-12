import React from 'react';

import { GlobalStyle } from './globals/globalStyles';

import { LRHeader } from './components/LRHeader';
import { LRFooter } from './components/LRFooter';
import { LRRouter } from './routes';
import { LRContainer } from './components/LRContainer';
import { AppContainer } from './appStyles';

export const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <GlobalStyle />
      <LRHeader />
      <LRContainer>
        <LRRouter />
      </LRContainer>
      <LRFooter />
    </AppContainer>
  );
};