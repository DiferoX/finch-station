import React from 'react'
import '../styles/StopList.css'
import { useEffect, useState } from 'react'
import Stop from './Stop';
import RoutesList from './RoutesList';
import { v4 as uuidv4 } from 'uuid';
import { images } from './ImagesRand';


const StopList = () => {

  const [stops, setStops] = useState([])
  const [info, setInfo] = useState([])
  const [infoRoute, setInfoRoute] = useState([])
  // const [num, setNum] = useState(1)


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
    setInfo(data)
    setInfoRoute(data.routes)
    // setNum(Math.floor(Math.random() *6) + 1)
  }

  return (
    <div id='stopContent' className='stopContent'>
      <div className='container'>
        <h1>Finch Station</h1>
        <div className='row mt-5'>
          <div className="col-12 col-md-4">
            <nav className="flex-column align-items-stretch pe-4 border-end">
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
        
          <div className="col-12 col-md-8">
            {
              infoRoute.length === 0 
              ? <img className='img-fluid rounded imgStation' 
                  src={images[Math.floor(Math.random() * images.length-1) + 1]} alt="" /> 
              : 
              <div>
                {
                  infoRoute.map((route) => {
                    return (
                      <RoutesList
                        key={uuidv4()}
                        route={route}
                        info={info}
                      />
                    )
                  })
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default StopList
