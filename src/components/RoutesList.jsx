import React, { useState } from 'react'
import Route from './Route';
import { v4 as uuidv4 } from 'uuid';

const RoutesList = (props) => {
  console.log(props.route.stop_times);

  const [stopTimes, setStopTimes] = useState(props.route.stop_times)

  return (

    <div className="cardBox card mb-2">
      <div className="card-body">
        <h6 className="card-title">{props.route.name}</h6>
        {/* <p className="card-text">{props.route.agency}</p> */}
      </div>
      <div>
        {/* {routes.length === 0 ? "0" : "+"} */}
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
  )
}

export default RoutesList
