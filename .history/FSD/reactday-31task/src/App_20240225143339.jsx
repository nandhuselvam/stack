import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import FullStackDevelopment from './FullStackDevelopment'
import All from './All'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function App() {
  return (
    <Router>

        <div>
          <nav>
            <ul>
              

              <li>
                <Link to="/all"> </Link>
                <a href="https://www.guvi.in/blog/search/All">All</a>
              </li>
              <li>
                <Link to="/fullstackdevelopment"></Link>
                <a href="https://www.guvi.in/blog/search/Full+Stack+Development">FullStackDevelopment</a>
              </li>
              <li>
                <Link to="/datascience"> </Link>
                <a href="https://www.guvi.in/blog/search/datascience/">DataScience</a>

                
              </li>
              <li>
                <Link to="/cybersecurity"> </Link>
                <a href="https://www.guvi.in/blog/search/CyberSecurity">CyberSecurity</a>
              </li>
              <li>
                <Link to="/career"> </Link>
                <a href="https://www.guvi.in/blog/search/Career">Career</a>
              </li>
            </ul>
          </nav>
        

      <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/contact' Component={Contact}></Route>
          <Route path='/all' Component={All}></Route>
          <Route path='/fullstackdevelopment' Component={FullStackDevelopment}></Route>
          <Route path='/datascience' Component={DataScience}></Route>
          <Route path='/cybersecurity' Component={CyberSecurity}>CyberSecurity</Route>
          <Route path='/career' Component={Career}></Route>
      </Routes>

        </div>
    </Router>
  )
}

export default App


