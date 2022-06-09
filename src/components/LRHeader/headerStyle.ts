import styled from 'styled-components';

export const Header = styled("header")`
  height: 80px;
  background-color: purple;
`;

export const Nav = styled("nav")`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled("button").attrs({ type: "button" })`
  width: 100px;
  height: inherit;
  background: lightcoral;
  border: none;
  color: white;
  margin: 0 4px;
  cursor: pointer;
`;