import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If redirected here from Register with an email, pre-fill it
  const [formData, setFormData] = useState({
    identifier: location.state?.email || "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", {
        email: formData.identifier,
        password: formData.password
      });

      login(res.data.token, res.data.user?.role || "user");

      // Redirect to Home after login
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Login</h2>

        {error && <p className="auth-error">{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            name="identifier"
            type="email"
            placeholder="Email"
            value={formData.identifier}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary" type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;