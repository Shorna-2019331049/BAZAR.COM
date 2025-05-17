import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a login process (replace this with your actual login logic)
    if (username === 'user' && password === 'pass') {
      setLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank Login</h1>
        {loggedIn ? (
          <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bank Details</h5>
                
            </div>
          </div>

        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
