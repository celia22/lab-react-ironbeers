import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const element = <FontAwesomeIcon size={48} icon={faHome} />

const Header = () => {
  return(
    <div className="header">
      <a className="icon" href="/">{element}</a>
    </div>
  )
}

export default Header