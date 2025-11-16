import {type ChangeEvent, type FormEvent, useState} from "react";
import {useLazyFetchSearchMoviesQuery} from "@/features/api/tmdbApi.ts";
import {MovieCard} from "@/pages/CategoryMovies/MovieCard/MovieCard.tsx";
import {SearchForm} from "@/shared/SearchForm/SearchForm.tsx";
import s from './Search.module.css'

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [triggerSearch,{data}] = useLazyFetchSearchMoviesQuery()


    const handleSearchSubmit =async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            await triggerSearch({query:searchQuery})
        }
    };



    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const hasResults = !!(data?.results?.length);

    return (
      <div className={s.container}>
          <h2 className={s.title}>Search Results</h2>
          <SearchForm handleSearchSubmit={handleSearchSubmit} handleSearchInput={handleSearchInput} searchQuery={searchQuery} />
          {!searchQuery && (
              <p className={s.emptyState}>Enter a movie title to start searching.</p>
          )}

          {searchQuery.length > 0 && hasResults && (
              <div>
                  <h2 className={s.resultsTitle}>{`Results for "${searchQuery}"`}</h2>
                  <MovieCard data={data}/>
              </div>
          )}

          {searchQuery.length > 0 && !hasResults && (
              <div>
                  <h2 className={s.resultsTitle}>{`Results for "${searchQuery}"`}</h2>
                  <p className={s.noResults}>No matches found for "{searchQuery}"</p>
              </div>

          )}
      </div>
    )
}