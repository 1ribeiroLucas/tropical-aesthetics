import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: normal 16px monospace;
  }

  :root {
    --dark-blue: #214252;
    --pink-one: #F05454;
    --pink-one-hover: #F49896;
    --pink-two: #AF2D2D;
    --pastel-pink: #CE6262
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