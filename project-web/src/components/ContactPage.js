
import React, { useState } from 'react';
import Navbar from './Navbar';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, email, message);
  
  };

  return (
    <div>
      <main>
        <h1>Contact Us</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <textarea
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </main>
      <footer>
        <p>&copy; 2024 Westland Properties</p>
      </footer>
    </div>
  );
}

export default Contact;
