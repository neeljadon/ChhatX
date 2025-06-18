import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import axios from "axios"; 

function Sidebar({ onSelectUser, loggedInUser }) {
  const [users, setUsers] = useState([]); // 
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => {
        const filtered = res.data.filter(user => user.name !== loggedInUser); // exclude self
        setUsers(filtered);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
      });
  }, [loggedInUser]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="text-center mb-3 text-success">
        <FaWhatsapp size={30} />
        <div className="sidebar-header">ChatX</div>
      </div>

      <input
        type="text"
        placeholder="Search or start new chat"
        value={searchTerm}
        onChange={handleChange}
      />

      <ul className="chat-list">
        {filteredUsers.map((user) => (
          <li
            key={user.name}
            className="chat-item"
            onClick={() => onSelectUser(user.name)}
          >
            <div className="chat-avatar">{user.avatar}</div>
            <div className="chat-info">
              <div className="chat-name">{user.name}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <div className="user-row">
          <div className="logged-in-user">
            <div className="avatar-circle">
              {loggedInUser?.charAt(0).toUpperCase()}
            </div>
            <div className="username-label">{loggedInUser}</div>
          </div>
          <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
