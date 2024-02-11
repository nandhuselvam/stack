import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App from './App'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
    </Provider>
    <App />
  </React.StrictMode>,
)