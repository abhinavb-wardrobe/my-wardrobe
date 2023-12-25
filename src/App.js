// App.js
import React, { useState } from 'react';
import Login from './components/Login';
//import Home from './pages/Home';
//import Dashboard from './pages/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div>
          <h2>Welcome to MyWardrobe App!</h2>
          {/* Add other components/pages for authenticated users */}
          {/* For example: <Dashboard /> */}
        </div>
      )}
    </div>
  );
};

export default App;
