import s from '/src/pages/Main/Main.module.css'
import {useNavigate} from "react-router-dom";
import {useFetchNowPlayingQuery} from "@/features/api/tmdbApi.ts";
import {MovieCard} from "@/pages/CategoryMovies/MovieCard/MovieCard.tsx";

export const NowPlayingMovies = () => {
    const {data} = useFetchNowPlayingQuery()
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/category/now-playing');
    };
    return (
        <section className={s.mainContent}>
            <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>Now Playing Movies</h2>
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