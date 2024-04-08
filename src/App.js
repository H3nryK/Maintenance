import React, { useState } from "react";
import Login from "./Login";
import Countdown from "./Countdown";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setAuthenticated(isLoggedIn);
  };

  return (
    <div className="App">
      <header>
        <h1>My React Website</h1>
      </header>
      <main>
        {authenticated ? (
          <div>
            <Countdown targetDate="2024-04-20T00:00:00" />
            <h2>Can't wait.</h2>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </main>
      <footer>
        <p>&copy; 2024 My website</p>
      </footer>
    </div>
  );
}

export default App;