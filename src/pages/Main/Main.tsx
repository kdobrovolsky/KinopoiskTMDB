import s from './Main.module.css';
import {
  MainHeader,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from '@/pages/Main';
import {
  useFetchNowPlayingQuery,
  useFetchPopularMoviesQuery,
  useFetchTopRatedQuery,
  useFetchUpcomingQuery,
} from '@/features';

export const Main = () => {
  const { data: nowPlayingMovies } = useFetchNowPlayingQuery();
  const { data: upcomingMovies } = useFetchUpcomingQuery();
  const { data: topRatedMovies } = useFetchTopRatedQuery();
  const { data: popularMovies } = useFetchPopularMoviesQuery();

  return (
    <div className={s.container}>
      <MainHeader data={popularMovies} />
      <PopularMovies data={popularMovies} />
      <TopRatedMovies data={topRatedMovies} />
      <UpcomingMovies data={upcomingMovies} />
      <NowPlayingMovies data={nowPlayingMovies} />
    </div>
  );
};
