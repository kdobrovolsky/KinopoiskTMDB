import {useFetchCreditsQuery, useFetchMovieDetailsQuery, useFetchSimilarQuery} from "@/features/api/tmdbApi.ts";
import {useParams} from "react-router-dom";
import s from './MovieDetails.module.css'


export const MovieDetails = () => {
    const {id } = useParams()
    const movieId =  parseInt(id!) //id! - я уверен, что id не будет undefined/null
    const { data } = useFetchMovieDetailsQuery(movieId);
    const {data: dataCredits} = useFetchCreditsQuery(movieId);
    const {data: dataSimilar} = useFetchSimilarQuery(movieId);

    const hours = Math.floor(data?.runtime / 60) || 0
    const minutes = data && data.runtime % 60



    return (
        <article className={s.container}>
            {data && (
                <>
                    <nav className={s.navigation}>
                        <button className={s.backButton}>← Back to Movies</button>
                    </nav>
                    <section className={s.movieHero}>

                        <div className={s.posterSection}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                alt={`Poster for ${data.title}`}
                                className={s.poster}
                                loading="lazy"
                            />
                        </div>

                        <div className={s.infoSection}>
                            <header className={s.movieHeader}>
                                <h1 className={s.title}>{data.title}</h1>
                                <div className={s.metaInfo}>
                                    <span className={s.year}>
                                       Release year: {new Date(data.release_date).getFullYear()}
                                    </span>
                                    <span className={s.rating}>
                                        ⭐ {data.vote_average.toFixed(1)}
                                    </span>
                                    <span className={s.runtime}>
                                        {hours}h {minutes}m
                                    </span>
                                </div>
                            </header>
                            <p className={s.overview}>{data.overview}</p>

                            <div className={s.genres}>
                                <h3>Genres</h3>
                                {data.genres.map(genre => (
                                    <span key={genre.id} className={s.genreTag}>
                                        {genre.name}
                                    </span>
                                ))}
                            </div>


                        </div>
                    </section>
                </>
            )}

            <section className={s.castSection}>
                <h2 className={s.sectionTitle}>Top Cast</h2>
                <div className={s.castGrid}>
                    {dataCredits?.cast.slice(0, 6).map(actor => (
                        <article key={actor.id} className={s.actorCard}>
                            <div className={s.actorImageContainer}>
                                {actor.profile_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                        alt={actor.original_name}
                                        className={s.actorImage}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className={s.actorPlaceholder}>
                                        No Photo
                                    </div>
                                )}
                            </div>
                            <div className={s.actorInfo}>
                                <h3 className={s.actorName}>{actor.original_name}</h3>
                                <p className={s.actorCharacter}>{actor.character}</p>
                            </div>
                        </article>
                    ))}
                </div>

            </section>


            <section className={s.similarSection}>
                <h2 className={s.sectionTitle}>Similar Movies</h2>
                <div className={s.similarGrid}>
                    {dataSimilar?.results.slice(0, 6).map(similar => (
                        <article key={similar.id} className={s.similarCard}>
                            <div className={s.similarImageContainer}>
                                {similar.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${similar.poster_path}`}
                                        alt={similar.title}
                                        className={s.similarImage}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className={s.similarPlaceholder}>
                                        No Poster
                                    </div>
                                )}
                            </div>
                            <div className={s.similarInfo}>
                                <h3 className={s.similarTitle}>{similar.title}</h3>
                                <p className={s.similarYear}>
                                    {new Date(similar.release_date).getFullYear()}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


        </article>
    )
}


