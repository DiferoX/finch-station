import React from 'react'
import '../styles/Stop.css'
import Img0001 from '../assets/0003.jpg'

const Stop = ({stop, infoStation}) => {
  // console.log(stop)
  return (

    <div className="cardBox card mb-2" onClick={() => infoStation(stop)}>
      <div className="card-body">
        <h6 className="card-title">{stop.name}</h6>
        <p className="card-text">{stop.agency}</p>
      </div>
    </div>
  )
}

export default Stop
{/* <div className='card card-body bg-danger text-center p-5'>
      <h2>{stop.name}</h2>
      <p>{stop.agency}</p>
    </div> */}