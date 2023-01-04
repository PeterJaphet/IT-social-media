import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="search-result-card">
          {/* Card content */}
          <h4>{result.userid}</h4>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
