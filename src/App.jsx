import { useEffect, useState } from 'react'
import StopList from './components/StopList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'


function App() {

  const [stops, setStops] = useState([])


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


  return (
    <div id='home' className="App">
      
      <NavBar stops={stops} />
      <Header />
      
      <Services />
      <StopList stops={stops} />
      <Contact />

      <Footer />

    </div>
  )
}

export default App
