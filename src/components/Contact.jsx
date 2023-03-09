import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id='contact' className='contactMainContent page-section'>
      <div className='container contactContainer'>
        <form className="row text-center">
          <div className='text-center mb-5'>
            <h2>CONTACT US</h2>
            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
          </div>
          <div className='formContent mb-5'>
            <div className="mb-3">
              <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name *" />
              <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Email *" />
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message *"></textarea>
            </div>
          </div>
          <button className="btn btn-primary btn-sm">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
