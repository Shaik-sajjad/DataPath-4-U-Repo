import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Technology from './components/Technology/Technology'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Technology />
              <Contact />
            </>
          } />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
