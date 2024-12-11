import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    userName: '',
    _id: '',
    email: '',
    contact: '',
    level: '',
    password: '',
    confirmPassword: '',
    accountType: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { firstName, surname, userName, _id, email, contact, level, password, confirmPassword, accountType } = formData;

      if (accountType === '') {
        setError('Please select an account type');
        setIsLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:3000/users', {
        firstName,
        surname,
        userName,
        _id,
        email,
        contact,
        level,
        accountType,
        password,
      });

      console.log('Account created:', response.data);
      navigate('/login'); // Redirect to login page after successful signup
      
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="signUp"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/R.jpeg)`,
        backgroundSize: '70%',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <div>
        <h1>Westland Accommodation</h1>
        <h2>Sign up</h2>
        
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="_id"
              placeholder="Registration Number"
              value={formData._id}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="level"
              placeholder="Level"
              value={formData.level}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            Account Type:
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
            >
              <option value="">Select an account type</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </label>
 
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit">Sign up</button>
          )}
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
