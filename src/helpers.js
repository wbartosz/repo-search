import { useState, useEffect } from 'react';

export const GH_BASE_URL = 'https://api.github.com';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        console.log('fetch data');
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      }
    };
      
    if(url) {
      fetchData();
    }

    // Clear up the fetch by aborting the old one
    return () => {
      controller.abort();
    };
  }, [url, options]);
   
  return { response, error, isLoading };
};

export const searchInputFocus = () => {
  const searchInput = document.getElementById('search-input');
  searchInput.focus();
}