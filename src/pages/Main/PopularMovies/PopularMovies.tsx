import s from '/src/pages/Main/Main.module.css';
import { useNavigate } from 'react-router-dom';
import type { TMDBMoviesResponse } from '@/shared';
import { MovieCard } from '@/entities/movie/ui';

type Props = {
  data: TMDBMoviesResponse | undefined;
};

export const PopularMovies = ({ data }: Props) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/category/popular');
  };

  return (
    <section className={s.mainContent}>
      <div className={s.sectionHeader}>
        <h2 className={s.sectionTitle}>Popular Movies</h2>
        <button className={s.viewMoreButton} onClick={handleViewMore}>
          View More
        </button>
      </div>

      <MovieCard data={data} className={s.moviesGrid} limit={6} />
    </section>
  );
};
