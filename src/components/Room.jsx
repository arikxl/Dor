





const Room = ({ setRoom }) => {
    return (
      
        <form onSubmit={setRoom}>
          <p>Enter Room Name</p>
          <input type="text" />
          <button type="submit">Let's Go!</button>
    </form>
  )
}

export default Room