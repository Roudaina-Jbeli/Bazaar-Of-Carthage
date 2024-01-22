import React, { useState } from "react";
import { useAuth } from "./AuthProvider";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    login(credentials);
    // Redirect or perform other actions after successful login
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleInputChange}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
