import { dbApi } from '../../services/dbApi.js';
import { useCallback, useEffect, useState } from 'react';


export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await dbApi.get('/catalog/movies/');
      setMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return {
    movies,
    loading,
    error,
  };

};