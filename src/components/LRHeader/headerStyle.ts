import styled from 'styled-components';

export const Header = styled("header")`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: var(--dark-blue);
  z-index: 5;
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
  background: var(--pink-one);
  border: none;
  color: white;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: var(--pink-one-hover);
    font-size: 18px;
  }
`;