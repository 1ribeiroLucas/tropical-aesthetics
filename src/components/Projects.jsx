import React from 'react';

export default class Projects extends React.Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
    
    return (
      <div style={style} className="projects">
        <h1><a href="https://rpg-chars.vercel.app/" target="_blank" rel="noreferrer">BRCC - Bardo's RPG Character Creator</a></h1>
      </div>
    )
  }
}
