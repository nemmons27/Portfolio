import { useState, useEffect } from 'react'
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
      <div>

      </div>
      <br />
      <footer className='footer'>
      © {getYear()} Emmons, all rights reserved
      </footer>
    </main>
    </div>
  )
}

export default App