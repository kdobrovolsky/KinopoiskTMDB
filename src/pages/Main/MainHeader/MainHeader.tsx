import s from "@/pages/Main/Main.module.css";
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import type {TMDBMovie} from "@/features/api/tmdbApi.types.ts";
import {useNavigate} from "react-router-dom";
import {useFetchPopularMoviesQuery} from "@/features/api/tmdbApi.ts";
import {SearchForm} from "@/shared/SearchForm/SearchForm.tsx";


export const MainHeader = () => {
    const [randomMovie, setRandomMovie] = useState<TMDBMovie | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const { data } = useFetchPopularMoviesQuery();

    useEffect(() => {
        if (data?.results) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setRandomMovie(data.results[randomIndex]);
        }
    }, [data]);

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };


    return (
        <section
            className={s.welcomeSection}
            style={{
                backgroundImage: randomMovie?.backdrop_path
                    ? `url(https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path})`
                    : 'none',
            }}
        >
            <div className={s.overlay}></div>

            <div className={s.welcomeContent}>
                <h1 className={s.title}>Welcome to MovieDB</h1>
                <p className={s.subtitle}>Now playing: {randomMovie?.title}</p>
                <SearchForm handleSearchInput={handleSearchInput} handleSearchSubmit={handleSearchSubmit} searchQuery={searchQuery} />
            </div>
        </section>
    )
}