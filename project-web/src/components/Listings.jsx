import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Slide from './app';
import "./Listings.css";

const Listings = () => {
  const [listing, setListing] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const load_data = async () => {
    await axios.get('http://localhost:3000/accommodation')
      .then(res => {
        console.log(res.data);
        setListing([...res.data]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    load_data();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listing.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listing.length) % listing.length);
  };

  return (
    <div>
      <Navbar
        ButtonText1="Enlist" 
        ButtonText2="LogOut" 
        ButtonPath1="/signup" 
        ButtonPath2="/login" 
        text1="Home" 
        text2="About" 
        text3="Listings" 
        text4="Contact" 
        textPath1="/" 
        textPath2="/" 
        textPath3="/listing" 
        textPath4="/" 
        showText1={true} 
        showText2={true} 
        showText3={false} 
        showText4={false} 
        showButton1={true} 
        showButton2={true}
      />
      <div>
        <Slide />
      </div>

      {listing.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Listing Name:</th>
                 <td>{listing[currentIndex].listingName}</td>
              </tr>
              <tr>
                <th>Availabe Rooms:</th>
                <td>{listing[currentIndex].availableRooms}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>{listing[currentIndex].price}</td>
              </tr>
              <tr>
                <th>Distance:</th> 
                <td>{listing[currentIndex].distance}</td>
              </tr>
              <tr>
                <th>Address:</th> 
                <td>{listing[currentIndex].address}</td>
              </tr>
              <tr>
                <th>Contact Details:</th> 
                <td>{listing[currentIndex].contact}</td>
              </tr>
              
            </thead>
    
          </table>
          <br />
          <h4>Description:</h4>
          <p>{listing[currentIndex].desciption}</p>
          <br />
          <h4>Services Provided:</h4>
          <p>{listing[currentIndex].servicesProvided}</p>
          <br />
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

    </div>
  );
};

export default Listings;
