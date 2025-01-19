import React, { useState } from 'react';
import Popup from './Popup';

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      name: 'John Doe',
      location: 'Chicago',
      photo: 'https://via.placeholder.com/100',
      friends: ['Jane Smith', 'Sam Wilson'],
    },
    {
      name: 'Jane Smith',
      location: 'New York',
      photo: 'https://via.placeholder.com/100',
      friends: ['John Doe', 'Lucy Lee'],
    },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-spotifyDarkGray min-h-screen p-8">
      <h1 className="text-3xl text-spotifyGreen font-bold mb-4">Admin Dashboard</h1>
      <div className="bg-spotifyGray p-6 rounded-lg">
        <h2 className="text-2xl text-white mb-4">All Users</h2>
        <ul>
          {users.map((user, index) => (
            <li
              key={index}
              className="text-white mb-2 cursor-pointer hover:text-spotifyGreen transition duration-300"
              onClick={() => handleUserClick(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <Popup friend={selectedUser} onClose={closePopup} />
    </div>
  );
};

export default AdminDashboard;
