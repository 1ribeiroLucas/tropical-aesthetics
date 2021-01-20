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
        <h1>Ainda estamos trabalhando aqui!</h1>
      </div>
    )
  }
}
