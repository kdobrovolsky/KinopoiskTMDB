import s from "@/pages/CategoryMovies/CategoryMovies.module.css";
import {RATING_THRESHOLDS, useFavorites} from "@/shared";
import type {TMDBMovie, TMDBMoviesResponse} from "@/features/api/tmdbApi.types.ts";

type PropsMovieCard = {
    data: TMDBMoviesResponse | undefined
    limit?: number;
    className?: string;
}

export const MovieCard = ({data,limit,className}:PropsMovieCard) => {
    const movies = limit ? data?.results.slice(0, limit) : data?.results;
    const {isFavorite, addFavorite, removeFavorite} = useFavorites();

    const handleFavoriteClick = (movie: TMDBMovie) => {
    if(isFavorite(movie.id)) {
        removeFavorite(movie.id);
    }else {
        addFavorite({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            voteAverage: movie.vote_average
        });
    }
    }
    return(
        <div className={className ? className : s.moviesGrid}>
            {movies?.map((movie) => (
                <article key={movie.id} className={s.movieCard}>
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                            className={s.moviePoster}
                            loading="lazy"

                        />

                    ) : (
                        <div className={s.posterPlaceholder}>
                            No Image
                        </div>
                    )}
                    <button
                        onClick={() => handleFavoriteClick(movie)}
                        className={`${s.favoriteButton} ${isFavorite(movie.id) ? s.active : ''}`}
                    >
                        {isFavorite(movie.id) ? '❤️' : '🤍'}
                    </button>
                    <div
                        className={`${s.movieRatingOverlay} ${
                            movie.vote_average >= RATING_THRESHOLDS.HIGH ? s.high :
                                movie.vote_average >= RATING_THRESHOLDS.MEDIUM ? s.medium : s.low
                        }`}
                    >
                        {movie.vote_average.toFixed(1)}
                    </div>
                    <div className={s.movieInfo}>
                        <h3 className={s.movieTitle}>{movie.title}</h3>
                    </div>

                </article>
            ))}
        </div>
    )
}