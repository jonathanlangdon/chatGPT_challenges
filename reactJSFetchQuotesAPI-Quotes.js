// Quotes Component for Quote Fetching App

import React, { useState, useEffect } from 'react';
import './App.css';

function Quotes(props) {
  const [quotes, setQuotes] = useState([]);
  const { topic, count } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchQuotes() {
      setErrorMessage('');
      setIsLoading(true);
      const url = `https://wp.zybooks.com/quotes.php?topic=${topic.toLowerCase()}&count=${count}`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        if (Array.isArray(result)) {
          setQuotes(result);
        } else {
          setErrorMessage(result.error);
        }
      } else {
        setErrorMessage('Error in the response.');
      }
      setIsLoading(false);
    }
    fetchQuotes();
  }, [topic, count]);

  return (
    <section>
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {quotes.map((q, index) => (
            <li key={index}>
              {q.quote} - {q.source}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Quotes;
