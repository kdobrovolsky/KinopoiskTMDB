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
import { MainPageSkeleton } from '@/pages/Main/MainSkeletons.tsx';

export const Main = () => {
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading } = useFetchNowPlayingQuery();
  const { data: upcomingMovies, isLoading: upcomingLoading } = useFetchUpcomingQuery();
  const { data: topRatedMovies, isLoading: topRatedLoading } = useFetchTopRatedQuery();
  const { data: popularMovies, isLoading: popularLoading } = useFetchPopularMoviesQuery();

  const isLoading = nowPlayingLoading || upcomingLoading || topRatedLoading || popularLoading;

  if (isLoading) {
    return <MainPageSkeleton />;
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
