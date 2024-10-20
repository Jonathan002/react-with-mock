// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [postResponse, postMessage] = useState("");

  // Fetch mock users
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle login form submission
  const handlePost = async (event) => {
    event.preventDefault();
    const message = event.target.elements.postMessage.value;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    postMessage(data.message);
  };

  return (
    <div className="App">
      <h1>GET: User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>POST:</h2>
      <form onSubmit={handlePost}>
        <input type="text" name="postMessage" placeholder="Message" required />
        <button type="submit">POST</button>
      </form>

      {postResponse && <p>{postResponse}</p>}
    </div>
  );
}

export default App;
