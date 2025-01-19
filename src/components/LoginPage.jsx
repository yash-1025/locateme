import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      if (role === 'admin') {
        navigate('/admin-dashboard'); // Redirect to Admin Dashboard
      } else {
        navigate('/user-dashboard'); // Redirect to User Dashboard
      }
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="bg-spotifyDarkGray min-h-screen flex items-center justify-center">
      <div className="bg-spotifyGray p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl text-spotifyGreen font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-white mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-spotifyBlack text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-spotifyBlack text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded bg-spotifyBlack text-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="bg-spotifyGreen text-black font-bold py-2 px-4 rounded hover:opacity-90 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
