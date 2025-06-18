import React from "react";

function ChatMessage({ message, currentUser }) {
  const isSentByMe = message.sender === currentUser;

  return (
    <div className={`message ${isSentByMe ? "sent" : "received"}`}>
      {message.message}
    </div>
  );
}

export default ChatMessage;

