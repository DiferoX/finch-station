import React from 'react'
import '../styles/Header.css'
import HeadImg from '../assets/0001.jpg'

const Header = () => {
  return (
    <div className='header' >
      <img className='headerImg' src={HeadImg} alt={'Header image'} />
    </div>
  )
}

export default Header
