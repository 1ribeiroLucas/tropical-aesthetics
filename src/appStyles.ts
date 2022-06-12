import styled from 'styled-components';

export const AppContainer = styled("div")`
  height: 100vh;
  display: grid;
  /* grid-template-areas: 
    "header"
    "content"
    "footer"; */
  grid-template-rows: 1fr 2fr 1fr;
`