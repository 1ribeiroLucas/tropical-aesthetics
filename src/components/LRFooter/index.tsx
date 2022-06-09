import React from 'react';
import { Footer } from './footerStyle';

export const LRFooter: React.FC = (): JSX.Element => {
  return (
    <Footer>
      <section>
        <p>Quer falar comigo? Saca só:</p>
        <section>
          <a href="">Github</a>
          <a href="">LinkedIn</a>
        </section>
      </section>
    </Footer>
  )
};