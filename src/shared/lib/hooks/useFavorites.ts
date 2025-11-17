import type { FavoriteMovie } from '@/features/api/tmdbApi.types';
import { useState, useEffect } from 'react'

export const useFavorites = () => {

    const [favorites, setFavorites] = useState<FavoriteMovie[]>([])


    useEffect(() => {
       const storedFavorites  = localStorage.getItem('favorites');
        if(storedFavorites ){
            try{
                const parsedFavorites = JSON.parse(storedFavorites);
                setFavorites(parsedFavorites);
            }catch (e){
                console.log(e);
                localStorage.removeItem('favorites');
            }

        }
    }, [])


    const addFavorite = (movie: FavoriteMovie) => {
       if(!favorites.find(f => f.id === movie.id)){
           const newFavorites = [...favorites, movie];
           setFavorites(newFavorites);
           localStorage.setItem('favorites', JSON.stringify(newFavorites));
       }
    }


    const removeFavorite = (movieId: number) => {
        const newFavorites = favorites.filter(f => f.id !== movieId);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));

    }

    const isFavorite = (movieId: number) => {
       return !!favorites.find(f=> f.id === movieId);
    }

    return { favorites, addFavorite, removeFavorite, isFavorite }
}