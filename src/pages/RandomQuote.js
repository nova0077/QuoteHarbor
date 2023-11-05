import React, { useState, useEffect } from 'react';
import '../styles/RandomQuote.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const generateQuote = () => {
    fetch(`https://api.api-ninjas.com/v1/quotes`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'RnB3DvsOJe8++YSYP2aHeA==DCEVqj3SiNf9kH7U'
      },
    })
    .then(response => response.json())
    .then(response => {
      setAuthor(response[0].author);
      setQuote(response[0].quote);
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    generateQuote();
  }, []); // empty dependency array to ensure the effect runs only once

  return (
    <Card className="random-quote-container">
      <Card.Body>
        <Card.Text className='quote'>{quote}</Card.Text>
        <Card.Subtitle className='author mb-2 text-muted'>{author}</Card.Subtitle>
        <Button className='generate-button' onClick={generateQuote}>Generate Quote</Button>
      </Card.Body>
    </Card>
  )
}

export default RandomQuote;
