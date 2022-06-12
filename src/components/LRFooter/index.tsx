import React from 'react';
import { Footer, FooterH2, FooterLink, FooterSection } from './footerStyle';

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const LRFooter: React.FC = (): JSX.Element => {
  return (
    <Footer>
        <FooterH2>Quer falar comigo? Saca só:</FooterH2>
        <FooterSection>
          <FooterLink href="https://www.github.com/1ribeirolucas"><AiOutlineGithub size={32} /></FooterLink>
          <FooterLink href="https://www.linkedin.com/in/lucasmribeiro7"><AiOutlineLinkedin size={32} /></FooterLink >
        </FooterSection>
    </Footer>
  )
};