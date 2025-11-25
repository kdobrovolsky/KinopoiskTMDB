import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './CategoryMovies.module.css';

export const CategoryPageSkeleton = () => {
  return (
    <SkeletonTheme baseColor='#f0f0f0' highlightColor='#e0e0e0'>
      <div className={s.skeletonContainer}>
        <div className={s.navigationSkeleton}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className={s.navButtonSkeleton} width={100} />
          ))}
        </div>

        <Skeleton className={s.titleSkeleton} />

        <div className={s.moviesGridSkeleton}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={s.movieCardSkeleton}>
              <Skeleton className={s.posterSkeleton} />
              <Skeleton className={s.movieTitleSkeleton} />
              <Skeleton className={s.movieSubtitleSkeleton} />
            </div>
          ))}
        </div>

        {/* Скелетон пагинации */}
        <div className={s.paginationSkeleton}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className={s.paginationButtonSkeleton} />
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};
