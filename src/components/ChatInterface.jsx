import {useState} from 'react'
import { auth } from '../firebaseConfig';
import ChatHeader from './ChatHeader';
import LogoutButton from './LogoutButton';
import ExitRoomButton from './ExitRoomButton';

const ChatInterface = ({ room, setRoom, setIsUser }) => {
  console.log('room', room)
  
  const user = auth.currentUser;
  console.log(user)

  const [msg, setMsg] = useState("");
  

    const handleSendMessage = ()=>{
        console.log(msg);
      
      
  }
  

  return (
    <div>
      <ChatHeader user={user} room={ room} />

      <div className='messages'>

      

        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
        <br/>
        פה נציג את כל ההודעות
      </div>

      <div className='inputForm'>
        <input placeholder='What you want to say?...'
          type="text" onChange={(e) => setMsg(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      



      <div className='buttons'>
        <ExitRoomButton setRoom={setRoom} />

        <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
      </div>

    </div>
  )
}

export default ChatInterface