import React from 'react';
import profilePhoto from '../imgs/portfolio.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="photo">
        <img src={profilePhoto} alt="Lucas, o criador." />
      </div>
      <div className="about-text-section">
        <div>
          <h1>Lucas Martins Ribeiro</h1>
          <h3>Desenvolvedor Front-End, nerd, músico e viciado em queijo.</h3>
        </div>
        <p>
          Nascido em Guarulhos e criado em Irapuru - ambas cidades de SP -, atualmente resido em Natal-RN. 
          Desde cedo em contato com a tecnologia, dei meus primeiros passos no mundo do desenvolvimento ainda 
          na adolescência,  estudando desevolvimento de games. Hoje atuo como Desenvolvedor Front-End, buscando aprimorar
          a criação de sites modernos e robustos, e aqui é onde ficam meus trabalhos.
          <br />
          <br />
          Nas horas vagas, jogo videogames antigos, toco guitarra e assisto animes. Ah, e como bastante queijo.
        </p>
      </div>
    </div>
  )
}