import {useState} from 'react'
import reactLogo from './assets/react.svg'
import'./App.css'
import { ProfileNameContext } from './ProfileNameContext';
import Villager from './Villager';


function App() {
  const [profileName, setProfileName] = useState('Prince Provider');
  const [profileName1, setProfileName1] = useState('Messenger');

  return (
    <ProfileNameContext.Provider value={{profileName, setProfileName, profileName1, setProfileName1}}>
    
    <div>
     
         
          
    </div>
    </ProfileNameContext.Provider>
  )
}

export default App;
