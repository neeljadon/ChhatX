import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import axios from "axios";

function ChatWindow({ user, selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/messages/${user}/${selectedChat}`
        );
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to load messages:", err);
      }
    };

    if (user && selectedChat) {
      fetchMessages();
    }
  }, [user, selectedChat]);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = {
        sender: user,
        receiver: selectedChat,
        message: input,
      };

      try {
        const res = await axios.post(
          "http://localhost:5000/api/messages",
          newMessage
        );
        if (res.data.success) {
          const updatedMessages = await axios.get(
            `http://localhost:5000/api/messages/${user}/${selectedChat}`
          );
          setMessages(updatedMessages.data);
          setInput("");
        }

        setInput("");
      } catch (err) {
        console.error("Failed to send message:", err);
      }
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">{selectedChat}</div>
      <div className="messages">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} currentUser={user} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type a message"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
