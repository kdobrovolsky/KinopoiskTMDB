import { useState, useEffect } from 'react';
import type { FavoriteMovie } from '@/shared';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (e) {
        console.log(e);
        localStorage.removeItem('favorites');
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const addFavorite = (movie: FavoriteMovie) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (!currentFavorites.find((f: FavoriteMovie) => f.id === movie.id)) {
      const newFavorites = [...currentFavorites, movie];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  const removeFavorite = (movieId: number) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = currentFavorites.filter((f: FavoriteMovie) => f.id !== movieId);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const isFavorite = (movieId: number) => {
    return !!favorites.find(f => f.id === movieId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
