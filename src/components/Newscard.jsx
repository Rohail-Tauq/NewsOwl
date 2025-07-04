import React from 'react';
import './Newscard.css';

const NewsCard = ({ image, title, description, url }) => {
  return (
    <div className="news-card">
      <img src={image || "https://via.placeholder.com/300x200"} alt="News" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Link
      </a>
    </div>
  );
};

export default NewsCard;