import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import "../styles/App.css"; // Your custom styles

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // New state for the user's name
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleLogin = () => {
    if (username === "" || password === "" || name === "") {
      alert("Please enter valid credentials and name!");
    } else {
      // Simulate user login
      setUser({ username, name });
      navigate("/welcome");
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-2xl font-semibold mb-4 text-white text-center">Login</h2>

      {/* Name Input */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Username Input */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Password Input */}
      <div className="input-group">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default Login;
