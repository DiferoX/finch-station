import React from 'react'
import Logo from '../../src/assets/logo.svg'
import '../styles/NavBar.css'
import StopBtn from './StopBtn'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'


const NavBar = ({ stops }) => {

  const [infoRoute, setInfoRoute] = useState([])


  const infoStation = (data) => {
    setInfoRoute(data.routes)
  }

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark px-5 mb-3">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={Logo} alt="Logo" width="100" className="d-inline-block align-text-center m-3" />
          <h2>Finch Station</h2>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="nav nav-pills ms-auto">
            <li className="navItem navItemBtns">
              <a className="navLink navLinkBtns" href="#">Home</a>
            </li>
            <li className="navItem navItemBtns">
              <a className="navLink navLinkBtns" href="#services">Services</a>
            </li>
            <li className="navItem navItemBtns">
              <a className="navLink navLinkBtns" href="#stopContent">Routes</a>
            </li>
            <li className="navItem navItemBtns">
              <a className="navLink navLinkBtns" href="#contact">Contact</a>
            </li>
          
            {/* <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
                Finch Station List
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {
                  // Render the stops list
                  stops.map((stop) => {
                    return (
                      <StopBtn
                        key={uuidv4()}
                        stop={stop}
                        infoStation={infoStation}
                      />
                    );
                  })
                }
              </ul>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar