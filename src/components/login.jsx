import React, { useState } from 'react';
import userIcon from '../assets/userIcon.png';
import passwordIcon from '../assets/passwordIcon.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
        
        {/* Username Field with Icon and Custom Text Color */}
        <div className="mb-4 relative">
          <img src={userIcon} alt="User Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            style={{ color: '#FFFF55' }} // Custom text color
            required
          />
        </div>
        
        {/* Password Field with Icon and Custom Text Color */}
        <div className="mb-4 relative">
          <img src={passwordIcon} alt="Password Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            style={{ color: '#FFFF55' }} // Custom text color
            required
          />
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 rounded text-purple-600"
            />
            Remember me
          </label>
          <a href="/forgot-password" className="text-purple-600 hover:underline">
            Forgot your password?
          </a>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 mb-4 text-white bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          LOGIN
        </button>
        
        <p className="text-sm text-gray-600">
          New here?{' '}
          <a href="/signup" className="text-purple-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
