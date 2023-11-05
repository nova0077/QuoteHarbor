// src/pages/GetAuthors.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GetAuthors.css'; // Import the CSS file for styling

function GetAuthors() {
  const navigate = useNavigate();
  const [authorsList, setAuthorsList] = useState([]);

  const fetchAuthors = () => {
    fetch(`https://api.quotable.io/authors?sortBy=name&order=asc`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setAuthorsList(response.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="authors-container">
      {authorsList.map((author, key) => (
        <div className="author-card" key={key} onClick={() => navigate(`/quote/author/${author.name}`)}>
          <div className="author-name">{author.name}</div>
          <div className="author-bio">{author.bio}</div>
        </div>
      ))}
    </div>
  );
}

export default GetAuthors;
