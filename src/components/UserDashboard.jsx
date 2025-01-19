import React, { useState } from 'react';
import Popup from './Popup';

const UserDashboard = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const user = {
    name: 'John Doe',
    friends: [
      { name: 'Jane Smith', location: 'New York', photo: 'https://via.placeholder.com/100' },
      { name: 'Sam Wilson', location: 'Los Angeles', photo: 'https://via.placeholder.com/100' },
    ],
  };

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  const closePopup = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="bg-spotifyDarkGray min-h-screen p-8">
      <h1 className="text-3xl text-spotifyGreen font-bold mb-4">User Dashboard</h1>
      <div className="bg-spotifyGray p-6 rounded-lg">
        <h2 className="text-2xl text-white mb-4">Welcome, {user.name}</h2>
        <h3 className="text-xl text-white mb-2">Your Friends:</h3>
        <ul>
          {user.friends.map((friend, index) => (
            <li
              key={index}
              className="text-white mb-2 cursor-pointer hover:text-spotifyGreen transition duration-300"
              onClick={() => handleFriendClick(friend)}
            >
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
      <Popup friend={selectedFriend} onClose={closePopup} />
    </div>
  );
};

export default UserDashboard;
