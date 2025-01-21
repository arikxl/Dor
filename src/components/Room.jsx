import LogoutButton from "./LogoutButton"






const Room = ({ setRoom, setIsUser }) => {
  return (
    <>
      <form onSubmit={setRoom}>
        <p>Enter Room Name</p>
        <input type="text" placeholder="Choose your room..."/>
        <br />
        <button type="submit">Let's Go!</button>
      </form>

      <LogoutButton setRoom={setRoom} setIsUser={setIsUser} />
    </>



  )
}

export default Room