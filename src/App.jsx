import { useState } from 'react'

import './App.css'  
import Room from './components/Room';
import LoginButton from './components/LoginButton'
import ChatInterface from './components/ChatInterface'
import Cookies from 'universal-cookie';
import LogoutButton from './components/LogoutButton';


const cookies = new Cookies();

function App() {
  const [room, setRoom] = useState(null);
  const [isUser, setIsUser] = useState(cookies.get('kidkod-user') );
  

  return (
    <>
      {
        isUser
          ? room 
            ? <ChatInterface />
            : <Room setRoom={setRoom} />
          : <LoginButton setIsUser={setIsUser } />
      }  


      <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />

      


    </>
  )
}

export default App
