import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  div.root {
    width: 100%;
  }
`;