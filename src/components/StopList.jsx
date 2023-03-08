import React from 'react'
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
    <div>
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
  )
}

export default StopList
