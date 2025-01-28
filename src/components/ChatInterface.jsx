import {useState} from 'react'
import { auth } from '../firebaseConfig';

const ChatInterface = () => {
    const [msg, setMsg] = useState("");
    
    const handleSendMessage = ()=>{
        console.log(msg);
        
    }
    const user = auth.currentUser;
  return (
    <div>
        <div>
          <img src={user?.photoURL}/>
          <p>hi {user?.displayName}</p>
        </div>
        <input type="text" onChange={(e)=>setMsg(e.target.value)}></input>
        <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default ChatInterface