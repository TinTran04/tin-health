import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(url, {
          timeout: 10000,
          ...options
        });
        
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetch = () => {
    if (url) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          
          const response = await axios.get(url, {
            timeout: 10000,
            ...options
          });
          
          setData(response.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  };

  return { data, loading, error, refetch };
}