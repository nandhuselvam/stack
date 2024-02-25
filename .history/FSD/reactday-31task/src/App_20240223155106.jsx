import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </router>

      <routes

      
    </div>
  )
}

export default App
