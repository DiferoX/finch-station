import React from 'react'
import '../styles/Services.css'
import { FaCoffee } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';
import { MdAccessible } from 'react-icons/md';

const Services = () => {
  return (
    <section id='services' className='serviceMainConten page-section'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h2 className="section-heading text-uppercase">Services</h2>
          <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        </div>
        <div className="row text-center">
          <div className="serviceContent col-md-4">
            <span className="iconContent fa-stack fa-4x">
              <MdAccessible className='serviceIcon' />
            </span>
            <h4 className="my-3">Parking</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="serviceContent col-md-4">
            <span className="iconContent fa-stack fa-4x">
              <FaCoffee className='serviceIcon' />
            </span>
            <h4 className="my-3">Restaurant</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="serviceContent col-md-4">
            <span className="iconContent fa-stack fa-4x">
              <BsShop className='serviceIcon' />
            </span>
            <h4 className="my-3">Stores</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services