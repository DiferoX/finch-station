import React from 'react'

const Stop = ({stop}) => {
  // console.log(stop)
  return (
    <div className='card card-body bg-danger text-center p-5'>
      <h2>{stop.name}</h2>
      <p>{stop.agency}</p>
    </div>
  )
}

export default Stop
