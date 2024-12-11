import Navbar from './Navbar';
import React, { useState } from 'react';
import axios from 'axios';
import "./Enlist.css";

function Enlist() {
  const [formData, setFormData] = useState({
    listingName: '',
    address: '',
    desciption: '',
    distance: '',
    price: '',
    availableRooms: '',
    contact: '',
    servicesProvided: '',
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
      const response = await axios.post('http://localhost:3000/accommodation', formData);
      console.log('Accommodation added:', response.data);
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
    <Navbar/>
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
              name="listingName"
              placeholder="Listing Name"
              value={formData.listingName}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="text"
              name="desciption"
              placeholder="Description"
              value={formData.desciption}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="number"
              name="distance"
              placeholder="Distance"
              value={formData.distance}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          <label>
            <input
              type="number"
              name="availableRooms"
              placeholder="Available Rooms"
              value={formData.availableRooms}
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
              name="servicesProvided"
              placeholder="Services Provided"
              value={formData.servicesProvided}
              onChange={handleChange}
              style={{ marginBottom: '20px' }}
            />
          </label>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit">Enlist</button>
          )}
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Enlist;
