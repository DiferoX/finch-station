import React from 'react'
import '../styles/StopList.css'
import { useEffect, useState } from 'react'
import Stop from './Stop';
import RoutesList from './RoutesList';
import { v4 as uuidv4 } from 'uuid';


// https://jsonplaceholder.typicode.com/todos

const StopList = () => {

  const [stops, setStops] = useState([])
  const [infoRoute, setInfoRoute] = useState([])

  // https://myttc.ca/finch_station.json
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://myttc.ca/finch_station.json')
      const data =  await response.json()
      setStops(data.stops)
      // console.log(data);
    }
    fetchData()
  }, [])

  const infoStation = (data) => {
    // console.log(data.routes);
    setInfoRoute(data.routes)
  }

  return (
    <div id='stopContent' className='stopContent'>
      <h1>Finch Station</h1>
      <div className='row'>
        <div className="col-4">
          <nav className="h-100 flex-column align-items-stretch pe-4 border-end">
            {
              stops.map((stop) => {
                return (
                  <Stop
                    key={uuidv4()}
                    stop={stop}
                    infoStation={infoStation}
                  />
                );
              })
            }
          </nav>
        </div>

        <div className="col-8">
          {
            infoRoute.map((route) => {
              return (
                <RoutesList
                  key={uuidv4()}
                  route={route}
                />
              )
            })
          }
          {/* <RoutesList infoRoute={infoRoute} /> */}
        </div>
      </div>
    </div>
  )
}

export default StopList
