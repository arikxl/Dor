import React from 'react'

const ChatHeader = ({ user, room }) => {

  return (
    <header>

      <div>
        <p>Hi {user?.displayName}</p>
        <h2>Welcome to: {room}</h2>
      </div>
      
      <img src={user?.photoURL} />

    </header>
  )
}

export default ChatHeader