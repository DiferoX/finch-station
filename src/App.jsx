import StopList from './components/StopList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'

function App() {

  return (
    <div id='home' className="App">
      
      <NavBar />
      <Header />
      
      <Services />
      <StopList />
      <Contact />

      <Footer />

    </div>
  )
}

export default App
