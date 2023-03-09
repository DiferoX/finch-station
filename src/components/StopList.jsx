import React from 'react'
import '../styles/StopList.css'
import { useEffect, useState } from 'react'
import Stop from './Stop';
import { v4 as uuidv4 } from 'uuid';

const StopList = () => {

  const [stops, setStops] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://myttc.ca/finch_station.json')
      const data =  await response.json()
      setStops(data.stops)
    }
    fetchData()
  }, [])

  return (
    <div id='stopContent' className='stopContent'>
      <h1>Finch Station</h1>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-5 g-4 p-5">
          {
            stops.map((stop) => {
              return (
                <Stop
                  key={uuidv4()}
                  stop={stop}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default StopList
