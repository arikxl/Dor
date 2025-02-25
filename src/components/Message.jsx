/* eslint-disable react/prop-types */

const Message = ({message }) => {
  return (
    <p>
      <b>{message.user }</b>
      : {message.text }
    </p>
  )
}

export default Message;