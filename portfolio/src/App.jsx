import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import background from './assets/Portfolio-background.jpeg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div>
    <header>
      <Nav />
    </header>

    <br />

    <main>
      <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/about' element={<About />}/>
      </Routes>

      <br />
      <footer className='footer'>
      © {getYear()} Emmons, all rights reserved
      </footer>
    </main>
    </div>
  )
}

export default App