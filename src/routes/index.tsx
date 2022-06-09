import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LRHomepage } from '../components/LRHomepage';
import { LRProjects } from '../components/LRProjects';

export const LRRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LRHomepage />}/>
      <Route path="/projetos" element={<LRProjects />} />
    </Routes>
  )
} 