import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUsernameAndPassword } from "../service/UserService";

function SignupComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const user = getUserByUsernameAndPassword(username, password);

    if (user != null) {
      props.setLoggedInUser(user);
      alert("Login successful!");
      navigate("/user/home");
    } else {
      alert("Invalid username or password!");
    }
  }

  return (
    <div>
      <h2>User Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignupComponent;
