import styled from 'styled-components';

export const Footer = styled("footer")`
  position: fixed;
  width: 100%;
  height: fit-content;
  background-color: var(--dark-blue);
  bottom: 0;
  color: #EEEEEE;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const FooterSection = styled("section")`
  background-color: #EEEEEE;
  color: var(--dark-blue);
  border-radius: 8px 8px 0 0;
`;

export const FooterH2 = styled("h2")`
  padding: 16px 0;
  font-size: 24px;
  width: fit-content;
`;

export const FooterLink = styled("a")`
  display: inline-block;
  margin: 8px;
  color: var(--dark-blue);

  &:visited {
    color: initial;
  }
`;