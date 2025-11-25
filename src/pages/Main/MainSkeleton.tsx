import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './Main.module.css';

export const MainSkeleton = () => {
  return (
    <div className={s.headerSkeleton}>
      <Skeleton height={800} className={s.heroSkeleton} />
    </div>
  );
};

export const MovieSectionSkeleton = () => {
  return (
    <section className={s.movieSection}>
      <div className={s.movieGrid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={s.movieCardSkeleton}>
            <Skeleton height={300} className={s.posterSkeleton} />
            <Skeleton height={20} className={s.titleSkeleton} />
            <Skeleton height={16} width='60%' />
          </div>
        ))}
      </div>
    </section>
  );
};

export const MainPageSkeleton = () => {
  return (
    <div className={s.container}>
      <MainHeaderSkeleton />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
    </div>
  );
};
