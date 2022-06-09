import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Nav } from './headerStyle';

export const LRHeader: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <Header>
      <Nav>
        <Button onClick={(): void => navigate("/", { replace: true })}>
          O dev
        </Button>
        <Button onClick={(): void => navigate("/projetos", { replace: true })}>
          Projetos
        </Button>
      </Nav>
    </Header>
  )
};