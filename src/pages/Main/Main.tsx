import s from './Main.module.css';
import {
  MainHeader,
  MainSkeleton,
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
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading } = useFetchNowPlayingQuery();
  const { data: upcomingMovies, isLoading: upcomingLoading } = useFetchUpcomingQuery();
  const { data: topRatedMovies, isLoading: topRatedLoading } = useFetchTopRatedQuery();
  const { data: popularMovies, isLoading: popularLoading } = useFetchPopularMoviesQuery();

  const isLoading = nowPlayingLoading || upcomingLoading || topRatedLoading || popularLoading;

  if (isLoading) {
    return <MainSkeleton />;
  }

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
