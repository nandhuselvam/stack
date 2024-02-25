import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProfileNameContext } from '../../FSD/reactday-8/src/ProfileNameContext'

function App() {
  const [profileName, setProfileName1] = useState('Prince provider')

  return (
    <ProfileNameContext.Provider value={}
    <div className="App">
      
    </div>
  )
}

export default App
