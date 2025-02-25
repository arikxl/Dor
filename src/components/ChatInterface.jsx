/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig';
import ChatHeader from './ChatHeader';
import LogoutButton from './LogoutButton';
import ExitRoomButton from './ExitRoomButton';
import { addDoc, collection, serverTimestamp, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';

const ChatInterface = ({ room, setRoom, setIsUser }) => {
  // console.log('room', room)
  // console.log(user)

  const user = auth.currentUser;
  const messageRef = collection(db, "Messages");

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const queryMessages = query(messageRef, where('room', '==', room), orderBy('createdAt'));
    const getData = onSnapshot(queryMessages, (data) => {
      let list = [];
      data.forEach((item) => {
        list.push({ ...item.data(), id: item.id })
      })
      setMessages(list)

    });
    return () => getData()

  }, [messages])





  const handleSendMessage = async (e) => {
    e.preventDefault()
    console.log(msg);
    if (msg === '') return;
    await addDoc(messageRef, {
      text: msg,
      user: user.displayName,
      room: room,
      createdAt: serverTimestamp()
    });

    setMsg('')
  }



  return (
    <div>

      <ChatHeader user={user} room={room} />

      <div className='messages'>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}




      </div>

      <form onSubmit={handleSendMessage} className='inputForm'>
        <input placeholder='What you want to say?...'
          type="text" onChange={(e) => setMsg(e.target.value)} />
        <button type='submit'>Send</button>
      </form>




      <div className='buttons'>
        <ExitRoomButton setRoom={setRoom} />

        <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
      </div>

    </div>
  )
}

export default ChatInterface