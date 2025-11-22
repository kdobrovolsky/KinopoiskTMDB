import { useFetchDiscoverMoviesQuery, useFetchMovieListQuery } from '@/features/api/tmdbApi.ts';
import { useState } from 'react';
import { MovieCard } from '@/pages/CategoryMovies/MovieCard/MovieCard.tsx';
import { Slider } from '@mui/material';
import s from './FilteredMovies.module.css';

export const FilteredMovies = () => {
  const initialFilters = {
    sort_by: 'popularity.desc',
    with_genres: '',
    'vote_average.gte': '0',
    'vote_average.lte': '10',
    page: 1,
  };

  const [filters, setFilters] = useState(initialFilters);
  const { data } = useFetchDiscoverMoviesQuery(filters);
  const { data: genresData } = useFetchMovieListQuery();

  const handleGenreToggle = (genreId: string) => {
    const currentGenres = filters.with_genres.split(',').filter(Boolean);
    if (currentGenres.includes(genreId.toString())) {
      const newArray = currentGenres.filter(id => id !== genreId.toString());
      setFilters({
        ...filters,
        with_genres: newArray.join(','),
        page: 1,
      });
    } else {
      const newArray = [...currentGenres, genreId.toString()];
      setFilters({
        ...filters,
        with_genres: newArray.join(','),
        page: 1,
      });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <div className={s.filterGroup}>
          <div className={s.filterTitle}>Sort by</div>
          <select
            className={s.select}
            value={filters.sort_by}
            onChange={e => setFilters({ ...filters, sort_by: e.target.value })}
          >
            <option value='popularity.desc'>По популярности (убывание)</option>
            <option value='popularity.asc'>По популярности (возрастание)</option>
            <option value='vote_average.desc'>По рейтингу (убывание)</option>
            <option value='vote_average.asc'>По рейтингу (возрастание)</option>
            <option value='release_date.desc'>По дате выпуска (убывание)</option>
            <option value='release_date.asc'>По дате выпуска (возрастание)</option>
            <option value='title.asc'>По названию (А-Я)</option>
            <option value='title.desc'>По названию (Я-А)</option>
          </select>
        </div>

        <div className={s.filterGroup}>
          <div className={s.filterTitle}>Rating</div>
          <div className={s.ratingValue}>
            {filters['vote_average.gte']} – {filters['vote_average.lte']}
          </div>
          <Slider
            value={[Number(filters['vote_average.gte']), Number(filters['vote_average.lte'])]}
            onChange={(event, newValue) => {
              setFilters({
                ...filters,
                'vote_average.gte': newValue[0].toString(),
                'vote_average.lte': newValue[1].toString(),
                page: 1,
              });
            }}
            min={0}
            max={10}
            step={0.1}
            valueLabelDisplay='auto'
            sx={{ maxWidth: 300 }}
          />
        </div>

        <div className={s.filterGroup}>
          <div className={s.filterTitle}>Genres</div>
          <div className={s.genresGrid}>
            {genresData?.genres.map(genre => (
              <button
                key={genre.id}
                className={`${s.genreButton} ${
                  filters.with_genres.includes(genre.id.toString()) ? s.genreButtonActive : ''
                }`}
                onClick={() => handleGenreToggle(genre.id.toString())}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        <button className={s.resetButton} onClick={() => setFilters(initialFilters)}>
          Reset Filters
        </button>
      </div>

      <div className={s.results}>
        <MovieCard data={data} />
      </div>
    </div>
  );
};
