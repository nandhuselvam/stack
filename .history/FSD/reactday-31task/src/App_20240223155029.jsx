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
                <Link to="/"> Home   </Link>
              </li>
              <li>
                <Link to="/about"> Home   </Link>
              </li>
              <li>
                <Link to="/"> Home   </Link>
              </li>
            </ul>
          </nav>
        </div>
      </router>

      
    </div>
  )
}

export default App
