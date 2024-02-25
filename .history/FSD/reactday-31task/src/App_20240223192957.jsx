import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <Router>
      
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
              
              <li>
                <Link to="/all"> All</Link>
              </li>
              <li>
                <Link to="/fullstackdevelopment"> FullStackDevelopment</Link>
              </li>
              <li>
                <Link to="/datascience"> DataScience</Link>
              </li>
              <li>
                <Link to="/cybersecurity"> CyberSecurity</Link>
              </li>
              <li>
                <Link to="/career"> Career</Link>
              </li>
            </ul>
          </nav>
        

      <Routes>
          <Route path='/all' Component={All}></Route>
          <Route path='/fullstackdevelopment' Component={FullStackDevelopment}></Route>
          <Route path='/contact' Component={DataScience}></Route>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/contact' Component={Contact}></Route>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
      </Routes>
      
        </div>
    </Router>
  )
}

export default App


