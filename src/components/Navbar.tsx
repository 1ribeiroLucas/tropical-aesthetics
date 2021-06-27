import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faIdCard, faFileCode} from '@fortawesome/free-solid-svg-icons';
import paths from '../paths';

const { HOME, ABOUT, PROJECTS } = paths;

export default function Navbar() {
  const history = useHistory();
  return (
    <div>
      <button type="button" onClick={() => history.push(ABOUT)}>
        <FontAwesomeIcon className="icon" icon={faIdCard} />
      </button>
      <button type="button" onClick={() => history.push(HOME)}>
        <FontAwesomeIcon className="icon" icon={faHome} />
      </button>
      <button type="button" onClick={() => history.push(PROJECTS)}>
        <FontAwesomeIcon className="icon" icon={faFileCode} />
      </button>
    </div>
  );
};
