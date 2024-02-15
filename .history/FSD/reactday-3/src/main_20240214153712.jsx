import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ToyBox from './ToyBox'
import Search from './Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToyBox />
    <Search />
  </React.StrictMode>,
)
