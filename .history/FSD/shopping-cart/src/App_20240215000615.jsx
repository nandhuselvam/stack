import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductList />
    </div>
  )
}

export default App
