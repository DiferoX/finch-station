import StopList from './components/StopList';
import Header from './components/Header';
import { FaBus } from 'react-icons/fa';
import './App.css'

function App() {

  return (
    <div className="App bg-dark text-white">
      <Header />
      <h1>Finch Station</h1>
      <div>
        <FaBus className='text-warning' />
      </div>
      
      <StopList />

    </div>
  )
}

export default App


        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}