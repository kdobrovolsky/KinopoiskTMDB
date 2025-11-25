import s from '/src/pages/Main/Main.module.css';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '@/entities/movie/ui';
import type { TMDBMoviesResponse } from '@/shared';

type Props = {
  data: TMDBMoviesResponse | undefined;
};

export const NowPlayingMovies = ({ data }: Props) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/category/now-playing');
  };
  return (
    <section className={s.mainContent}>
      <div className={s.sectionHeader}>
        <h2 className={s.sectionTitle}>Now Playing Movies</h2>
        <button className={s.viewMoreButton} onClick={handleViewMore}>
          View More
        </button>
      </div>
      <MovieCard data={data} className={s.moviesGrid} limit={6} />
    </section>
  );
};
