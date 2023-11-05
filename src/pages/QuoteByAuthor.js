// src/pages/QuoteByAuthor.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/QuoteByAuthor.css'; // Import the CSS file for styling

function QuoteByAuthor() {
  let { id } = useParams();
  console.log(id);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [inputAuthor, setInputAuthor] = useState("Thomas Edison");

  const fetchQuote = () => {
    fetch(`https://api.quotable.io/quotes?author=${inputAuthor || id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.results && response.results.length > 0) {
          setQuote(response.results[0].content);
          setAuthor(response.results[0].author);
        } else {
          setQuote("No quotes found for this author.");
          setAuthor("");
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchQuote();
  }); // Include 'id' in the dependency array to re-fetch when the ID changes

  const handleInputChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuote();
  };

  return (
    <div className="quote-container">
      <div className="quote-text">{quote}</div>
      <div className="author-name">{author}</div>

      {/* Input Form */}
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="authorInput">Enter Author Name:</label>
        <input
          type="text"
          id="authorInput"
          value={inputAuthor}
          onChange={handleInputChange}
          placeholder="Leave empty to use the author from the URL"
        />
        <button className="generate-button" type="submit">
          Generate Quote
        </button>
      </form>
    </div>
  );
}

export default QuoteByAuthor;
