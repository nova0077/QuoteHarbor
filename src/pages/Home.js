// src/pages/Home.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      <Card className="welcome-card">
        <Card.Body>
          <Card.Title className="card-title">Welcome to Quote Generator!</Card.Title>
          <Card.Text className="card-text">
            Explore the beauty of words and wisdom with our collection of inspiring quotes.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="instructions">
        <h2>How to Use</h2>
        <p>
          1. Click on "Get Random Quote" in the navigation bar to receive a random quote.
        </p>
        <p>
          2. Navigate to "Get Quote By Author" to search for quotes by a specific author.
        </p>
        <p>
          3. Visit "Get All Authors" to see a list of all available authors.
        </p>
        <p>
          Enjoy the wisdom and inspiration brought to you by Quote Generator!
        </p>
      </div>

      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>
          <strong>Name:</strong> Praveen
        </p>
        <p>
          <strong>Email:</strong> praveencodeforces@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Home;