import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CartContext  from './CartContext'
import CartPage from './CartPage'

function App() {
  

  return (
    <div>
      <CartContext />
      <CartPage />

    </div>
  )
}

export default App
