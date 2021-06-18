import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const element = <FontAwesomeIcon icon={faHome} />

const Header = () => {
  return(
    <div className="header">
      <span>{element}</span>
    </div>
  )
}

export default Header