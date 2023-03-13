import React from 'react'
import '../styles/Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdImportantDevices } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footerContent'>
      <div className="row container">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="footCard">
            <p>Copyright © Your Website 2023</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="footCard">
            <div className="footCardIcon">
              <a href="https://github.com/DiferoX/finch-station" className="btn btn-primary rounded-circle"><FaGithub /></a>
              <a href="https://github.com/DiferoX/finch-station">GitHub</a>
            </div>
            <div className="footCardIcon">
              <a href="https://diferox.github.io/portfolio/" className="btn btn-primary rounded-circle"><MdImportantDevices /></a>
              <a href="https://diferox.github.io/portfolio/">Portfolio</a>
            </div>
            <div className="footCardIcon">
              <a href="https://www.linkedin.com/in/diferox/" className="btn btn-primary rounded-circle"><FaLinkedin /></a>
              <a href="https://www.linkedin.com/in/diferox/">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="footCard">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
