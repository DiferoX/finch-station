import React from 'react'

const Route = (props) => {
  console.log(props.time.departure_time);

  return (
    <div className="card-bod">
      {/* <h6 className="card-title">{props.time.departure_time}</h6> */}
      <p className="card-text">{props.time.departure_time}</p>
    </div>
  )
}

export default Route