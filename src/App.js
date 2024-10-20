// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loginMessage, setLoginMessage] = useState("");

  // Fetch mock users
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    setLoginMessage(data.message);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" required />
        <button type="submit">Login</button>
      </form>

      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default App;
