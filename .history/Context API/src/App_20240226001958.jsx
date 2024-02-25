import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import

function App() {
  const [profileName, setProfileName1] = useState('Prince provider')

  return (
    <ProfileNameContext.Provider value={{profileName, setProfileName,
    profileName1, setProfileName1}}>
    <div className="App">
      <header className="App-header">
        <h1>Context</h1>
        <Villager />
      </header>
      
    </div>
    </ProfileNameContext.Provider>
  )
}

export default App
