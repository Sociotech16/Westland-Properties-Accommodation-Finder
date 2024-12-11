import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      if (response.data.success) {
        navigate('/Listings');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="_id"
          value={formData._id}
          onChange={handleChange}
          placeholder="Reg Number"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit">Login</button>
        )}
        <p>
          Don't have an account?{' '}
          <Link to="/signup">Sign Up Here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
