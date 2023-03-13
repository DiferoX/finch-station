import React from 'react'
import '../styles/StopList.css'
import { useState } from 'react'
import Stop from './Stop';
import RoutesList from './RoutesList';
import { v4 as uuidv4 } from 'uuid';
import { images } from './ImagesRand';


const StopList = ({ stops }) => {

  const [info, setInfo] = useState([])
  const [infoRoute, setInfoRoute] = useState([])


  const infoStation = (data) => {
    setInfo(data)
    setInfoRoute(data.routes)
  }

  return (
    <div id='stopContent' className='stopContent'>
      <div className='container'>
        <h1>Finch Station</h1>
        <h6>Lorem ipsum dolor sit amet consectetur.</h6>
        <div className='row mt-5'>
          <div className="col-12 col-md-4">
            <nav className="flex-column align-items-stretch pe-4 border-end">
              {
                // Render the stops list
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

          {/* If Stops from API is empty show an random image, else render infoRoute */}
          <div className="col-12 col-md-8">
            {
              infoRoute.length === 0 
              ?
              <div>
                <img className='img-fluid rounded imgStation' 
                  src={images[Math.floor(Math.random() * images.length-1) + 1]} alt="" /> 
                <p className="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
               
              : 
              <div>
                {
                  // Render the info routes
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
