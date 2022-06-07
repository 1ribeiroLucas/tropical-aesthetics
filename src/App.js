import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <>
        <style>
          {`
            main {
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: center;
              font-family: monospace;
              width: 80vw;
              margin: 0 auto;
            }

            p {
              width: 80%;
              font-size: 18px;
            }

            strong {
              font-size: 22px;
            }
          `}
        </style>
        <main>
          <h1> Em manutenção | Under maintenance</h1>

          <p>
            <strong>PT-BR</strong> <br />
            Com o objetivo de expor meu trabalho da melhor maneira possível,
            o site está em um profundo processo de atualização. Em breve,
            tudo isso aqui vai estar com uma cara completamente nova.
          </p>

          <p>
            <strong>EN</strong> <br />
            Aiming at the best way to show my work here, the site's under a deep
            update process. Soon, this portfolio is going to be brand new.
          </p>
        </main>
      </>
    )
  }
}