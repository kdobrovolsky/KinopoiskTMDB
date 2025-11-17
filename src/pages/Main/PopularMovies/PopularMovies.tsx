import s from '/src/pages/Main/Main.module.css'
import {useNavigate} from "react-router-dom";
import {useFetchPopularMoviesQuery} from "@/features/api/tmdbApi.ts";
import {MovieCard} from "@/pages/CategoryMovies/MovieCard/MovieCard.tsx";


export const PopularMovies = () => {
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/category/popular');
    };
    const { data } = useFetchPopularMoviesQuery();
    return (
        <section className={s.mainContent}>
            <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>Popular Movies</h2>
                <button
                    className={s.viewMoreButton}
                    onClick={handleViewMore}
                >
                    View More
                </button>
            </div>

            <MovieCard data={data} className={s.moviesGrid} limit={6} />
        </section>
    )
}