import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProfileNameContext } from './ProductNameContext'

function App() {
  const [profileName, setProfileName] = useState('Prince provider')

  return (
    <ProfileNameContext.Provider value={{profileName, setProfileName}}>
    <div className="App">
      <header className="App-header">
        <h1>Context</h1>
        <
      </header>
      
    </div>
    </ProfileNameContext.Provider>
  )
}

export default App
