import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-spotifyBlack p-4 flex justify-between items-center">
      <h1 className="text-spotifyGreen text-3xl font-bold">LocateMe</h1>
      <ul className="flex space-x-6">
        {['Map', 'About', 'Dashboard', 'Contact'].map((item) => (
          <li
            key={item}
            className="text-white text-lg cursor-pointer hover:text-spotifyGreen transition duration-300 ease-in-out"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
