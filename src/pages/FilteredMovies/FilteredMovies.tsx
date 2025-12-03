import { useFetchDiscoverMoviesQuery, useFetchMovieListQuery } from '@/shared/api/tmdbApi.ts';
import { useState } from 'react';
import s from './FilteredMovies.module.css';

import { Pagination } from '@/common';
import { GenreList, RatingRange, SortSelect } from '@/pages/FilteredMovies';
import { MovieCard } from '@/entities/movie/ui';
import { INITIAL_FILTERS } from '@/shared/constants/moviesConstants/moviesConstants.ts';
import { FilteredSkeleton } from '@/pages/FilteredMovies/FilteredSkeletons.tsx';
import { useScrollToTopOnChange } from '@/shared/lib/hooks';

export const FilteredMovies = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isOpen, setIsOpen] = useState(false);
  const { data: discoverData, isLoading: discoverLoading } = useFetchDiscoverMoviesQuery(filters);
  const { data: genresData, isLoading: genresLoading } = useFetchMovieListQuery();
  const isLoading = discoverLoading || genresLoading;

  useScrollToTopOnChange([filters.page]);

  if (isLoading) {
    return <FilteredSkeleton />;
  }

  const handleGenreToggle = (genreId: string) => {
    const currentGenres = filters.with_genres.split(',').filter(Boolean);

    const updated = currentGenres.includes(genreId)
      ? currentGenres.filter(id => id !== genreId)
      : [...currentGenres, genreId];

    setFilters({
      ...filters,
      with_genres: updated.join(','),
      page: 1,
    });
  };

  return (
    <div className={s.container}>
      <button className={s.filterButton} onClick={() => setIsOpen(true)}>
        Filters
      </button>

      <div className={`${s.mobileFilters} ${isOpen ? s.open : ''}`}>
        <div className={s.mobileFiltersInner}>
          <SortSelect
            value={filters.sort_by}
            onChange={sortBy => setFilters({ ...filters, sort_by: sortBy })}
          />

          <RatingRange
            minRating={filters['vote_average.gte']}
            maxRating={filters['vote_average.lte']}
            onRatingChange={(min, max) =>
              setFilters({
                ...filters,
                'vote_average.gte': min,
                'vote_average.lte': max,
                page: 1,
              })
            }
          />

          <GenreList
            genres={genresData?.genres || []}
            selectedGenres={filters.with_genres}
            onGenreToggle={handleGenreToggle}
          />

          <button className={s.applyButton} onClick={() => setIsOpen(false)}>
            Apply Filters
          </button>

          <button className={s.resetButton} onClick={() => setFilters(INITIAL_FILTERS)}>
            Reset Filters
          </button>
        </div>
      </div>
      <div className={s.filters}>
        <SortSelect
          value={filters.sort_by}
          onChange={sortBy => setFilters({ ...filters, sort_by: sortBy })}
        />

        <RatingRange
          minRating={filters['vote_average.gte']}
          maxRating={filters['vote_average.lte']}
          onRatingChange={(min, max) =>
            setFilters({
              ...filters,
              'vote_average.gte': min,
              'vote_average.lte': max,
              page: 1,
            })
          }
        />

        <GenreList
          genres={genresData?.genres || []}
          selectedGenres={filters.with_genres}
          onGenreToggle={handleGenreToggle}
        />

        <button className={s.resetButton} onClick={() => setFilters(INITIAL_FILTERS)}>
          Reset Filters
        </button>
      </div>

      <div className={s.results}>
        <MovieCard data={discoverData} />

        <Pagination
          currentPage={filters.page}
          setCurrentPage={p => setFilters({ ...filters, page: p })}
          pagesCount={discoverData?.total_pages || 1}
        />
      </div>
    </div>
  );
};
