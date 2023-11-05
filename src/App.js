// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Author from './pages/Author';
import QuoteByAuthor from './pages/QuoteByAuthor';
import RandomQuote from './pages/RandomQuote';
import GetAuthors from './pages/GetAuthors';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/random">Get Random Quote</Link>
          <Link to="/author">Get Quote By Author</Link>
          <Link to="/authors">Get All Authors</Link>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/random" exact element={<RandomQuote />} />
            <Route path="/author" exact element={<Author />} />
            <Route path="/quote/author/:id" exact element={<QuoteByAuthor />} />
            <Route path="/authors" exact element={<GetAuthors />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
