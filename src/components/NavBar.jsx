import React from 'react'
import Logo from '../../public/logo.svg'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar navbar-dark px-5 mb-3">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="Logo" width="100" class="d-inline-block align-text-center m-3" />
        <h2>Finch Station</h2>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#stopContent">First</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#scrollspyHeading2">Second</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar