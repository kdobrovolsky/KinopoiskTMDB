import {
  useFetchNowPlayingQuery,
  useFetchPopularMoviesQuery,
  useFetchTopRatedQuery,
  useFetchUpcomingQuery,
} from '@/features';

type Props = {
  page: number;
  type: string;
};

export const useCategoryData = ({ page, type }: Props) => {
  const { data: popularQuery } = useFetchPopularMoviesQuery(page, { skip: type !== 'popular' });
  const { data: topRatedQuery } = useFetchTopRatedQuery(page, { skip: type !== 'top-rated' });
  const { data: upcomingQuery } = useFetchUpcomingQuery(page, { skip: type !== 'upcoming' });
  const { data: nowPlayingQuery } = useFetchNowPlayingQuery(page, { skip: type !== 'now-playing' });

  switch (type) {
    case 'popular':
      return popularQuery;
    case 'top-rated':
      return topRatedQuery;
    case 'upcoming':
      return upcomingQuery;
    case 'now-playing':
      return nowPlayingQuery;
    default:
      return popularQuery;
  }
};
