import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const element = <FontAwesomeIcon  icon={faHome} size= "2x"/>

const Header = () => {
  return(
    <div className="header">
      <a className="icon" href="/">{element}</a>
    </div>
  )
}

export default Header