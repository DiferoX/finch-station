import StopList from './components/StopList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className="App">
      
      <NavBar />
      <Header />
      
      <div className='container-fluid'>
        <StopList />
      </div>

      <Footer />

    </div>
  )
}

export default App
