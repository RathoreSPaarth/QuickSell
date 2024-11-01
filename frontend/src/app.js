import React, { useState } from 'react';
import Login from './components/Login'
import Tabs from './components/tabs';

// Main App component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is authenticated (by checking for a token)
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  // Handle login (update the state)
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      {isAuthenticated() || isLoggedIn ? <Tabs /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
