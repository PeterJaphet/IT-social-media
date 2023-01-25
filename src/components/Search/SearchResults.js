import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'antd/es/card/Card';

function SearchResults() {
  const [results, setResults] = useState([]); // State to store the search results

  useEffect(() => {
    async function fetchResults() {
      const response = await axios.get('http://example.com/api/search', {
        params: {
          query: 'search'
        }
      });
      setResults(response.data.results);
    }
    fetchResults();
  }, []);

  return (
    <div className="search-results">
      {results.map(result => (
        <Card
          key={result.id}
          title={result.title}
          description={result.description}
          imageUrl={result.imageUrl}
        />
      ))}
    </div>
  );
}

export default SearchResults;