import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-spotifyGray text-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
      <p className="text-gray-400">{profile.description}</p>
      <button className="bg-spotifyGreen text-black px-4 py-2 rounded mt-4">
        View on Map
      </button>
    </div>
  );
};

export default ProfileCard;
