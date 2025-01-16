import {useState} from 'react'

const ChatInterface = () => {
    const [msg, setMsg] = useState("");
    const handleSendMessage = ()=>{
        console.log(msg);

    }
  return (
    <div>
        <input type="text" onChange={(e)=>setMsg(e.target.value)}></input>
        <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default ChatInterface