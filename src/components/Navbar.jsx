import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi"; // search icon

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">NewsOwl</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <FiSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

