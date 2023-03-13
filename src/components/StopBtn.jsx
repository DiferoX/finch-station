import React from 'react'
import '../styles/StopBtn.css'


const StopBtn = ({stop, infoStation}) => {

  return (
    <div>
      <li className='stopListBtn' onClick={() => infoStation(stop)}>
        <a className="dropdown-item" href="#stopContent">{stop.name}</a>
      </li>
      <li><hr className="dropdown-divider" /></li>
    </div>
  )
}

export default StopBtn
