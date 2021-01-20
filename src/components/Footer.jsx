import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <h3>Precisa de algo? Fale comigo:</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/lucasmribeiro7">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com/1ribeirolucas">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="/www.instagram.com/ribeirinho.jpg">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    )
  }
};