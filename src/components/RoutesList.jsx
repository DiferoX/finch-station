import React, { useState } from 'react'
import '../styles/RoutesList.css'
import Route from './Route';
import { v4 as uuidv4 } from 'uuid';
import { images } from './ImagesRand';

const RoutesList = (props) => {
  // console.log(props.route.stop_times);

  const [stopTimes, setStopTimes] = useState(props.route.stop_times)

  return (

    <div className="cardBox card mb-2">
      <div className='row g-0'>
        <div className='col-md-4 p-2'>
          <img className='img-fluid rounded' src={images[Math.floor(Math.random() * images.length-1) + 1]} alt="" />
        </div>
        <div className='col-md-8'>
          <div className="card-body">
            <h5 className="card-title">{props.info.name}</h5>
            <p className="card-text">{props.info.agency}</p>
            <h6 className="card-title">{props.route.name}</h6>
          </div>
          <div className='timeContent'>
            {
              stopTimes.map((time) => {
                return (
                  <Route
                    key={uuidv4()}
                    time={time}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutesList
