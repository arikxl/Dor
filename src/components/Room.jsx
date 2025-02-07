import { useRef } from "react"
import LogoutButton from "./LogoutButton"






const Room = ({ setRoom, setIsUser }) => {

  const roomInput = useRef();

  return (
    <>
      <form onSubmit={ ()=> setRoom(roomInput.current.value)}>
        <p>Enter Room Name</p>
        <input type="text" placeholder="Choose your room..." ref={roomInput } />
        <br />
        <button type="submit">Let's Go!</button>
      </form>

      <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
    </>



  )
}

export default Room