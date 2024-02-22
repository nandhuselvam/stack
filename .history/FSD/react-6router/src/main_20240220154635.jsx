import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartPage from './CartPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CartPage />
    
  </React.StrictMode>,
)