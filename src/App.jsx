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
  const [isUser, setIsUser] = useState(cookies.get('kidkod-user'));


  return (
    <main>
      {
        isUser
          ? room
            ? <ChatInterface room={room} setRoom={setRoom} setIsUser={setIsUser} />
            :
            <div className="center">
              <Room setRoom={setRoom} setIsUser={setIsUser} />
            </div>
          :
          <div className="center">
            <h1>KidKod Chat</h1>
            <LoginButton setIsUser={setIsUser} />
          </div>
      }






    </main>
  )
}

export default App
