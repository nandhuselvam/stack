import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartPage from './CartPage'
import CartContext from '.'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CartPage />
    <CartContext />
  </React.StrictMode>,
)
