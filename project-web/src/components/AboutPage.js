import React from 'react';
import "./AboutPage.css"

function AboutPage() {
  return (
    <div>
      <main>
        <h1>About <br/>Westland Properties</h1>
        <p>Westland Accommodations is a premier provider of off-campus housing dedicated to offering exceptional service and unparalleled support. Our team is committed to helping University of Zimbabwe students find comfortable, convenient, and affordable living spaces that feel like home.</p>
        <h2>Our Mission</h2>
        <p>At Westland Accommodations, our mission is to provide a personalized and professional approach to off-campus living. We strive to build long-term relationships with our students and provide them with the highest level of comfort, convenience, and support.  </p>
        <h2>Our Team</h2>
        <ul>
          <li>
            <img src="./background.jpeg" alt="Team Member 1" />
            Tawanda Gonyora, Broker
          </li>
          <li>
            <img src="./background.jpeg" alt="Team Member 2" />
            Danielias Bhidhi, Agent
          </li>
          <li>
            <img src="./background.jpeg" alt="Team Member 3" />
            Anna Charakupa, Agent
          </li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2024 Westland Properties</p>
      </footer>
    </div>
  );
}

export default AboutPage;
