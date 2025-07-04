import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/Newscard';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${query || 'latest'}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await res.json();
        setNewsData(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="news-grid">
  {newsData.length > 0 ? (
    newsData.map((item, index) => (
      <NewsCard
        key={index}
        image={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
      />
    ))
  ) : (
    <p className="no-news">No news found.</p>
  )}
</div>
    </>
  );
}

export default App;