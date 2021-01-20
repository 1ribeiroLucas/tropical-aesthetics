import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faIdCard, faFileCode} from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="nav-link" to="/about">
          <FontAwesomeIcon className="icon" icon={faIdCard} />
        </Link>
        <Link className="nav-link" to="/">
          <FontAwesomeIcon className="icon" icon={faHome} /> 
        </Link>
        <Link className="nav-link" to="/projects">
          <FontAwesomeIcon className="icon" icon={faFileCode} />
        </Link>
      </div>
    )
  }
}