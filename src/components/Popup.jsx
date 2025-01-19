import React from 'react';

const Popup = ({ friend, onClose }) => {
  if (!friend) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-spotifyGray p-6 rounded-lg shadow-lg w-1/3">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
        >
          X
        </button>
        <img
          src={friend.photo}
          alt={friend.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl text-spotifyGreen text-center font-bold">
          {friend.name}
        </h2>
        <p className="text-white text-center mt-2">
          <strong>Location:</strong> {friend.location}
        </p>
      </div>
    </div>
  );
};

export default Popup;
