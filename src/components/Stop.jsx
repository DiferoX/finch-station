import React from 'react'
import '../styles/Stop.css'

const Stop = ({stop, infoStation}) => {
  
  return (
    <div className="cardBox card mb-2" onClick={() => infoStation(stop)}>
      <div className="cardBody">
        <h6 className="card-title">{stop.name}</h6>
        <p className="card-text">{stop.agency}</p>
      </div>
    </div>
  )
}

export default Stop
