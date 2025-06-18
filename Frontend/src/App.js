import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import SignUpForm from './Auth/SignUpForm';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem('user');
  try {
    return savedUser ? JSON.parse(savedUser).username : null;
  } catch (e) {
    return null;
  }
});

  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <div className="app-container">
              <Sidebar loggedInUser={user} onSelectUser={setSelectedChat} />
              {selectedChat ? (
                <ChatWindow user={user} selectedChat={selectedChat} />
              ) : (
                <div className="chat-window placeholder">
                  <div className="chat-header">Select a chat to start messaging</div>
                </div>
              )}
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<LoginForm onLoginSuccess={setUser} />} />
      <Route path="/SignUpForm" element={<SignUpForm />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;