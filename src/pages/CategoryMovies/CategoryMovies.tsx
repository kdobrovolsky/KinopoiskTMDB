import s from './CategoryMovies.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Pagination } from '@/common';
import { MOVIE_CATEGORIES } from '@/features';
import { MovieCard } from '@/entities/movie/ui';
import { categoriesTitle, useCategoryData } from '@/shared';
import { CategorySkeleton } from '@/pages';
import { useScrollToTopOnChange } from '@/shared/lib/hooks';

export const CategoryMovies = () => {
  const navigate = useNavigate();
  const { type = 'popular' } = useParams();
  const [page, setPage] = useState(1);
  const data = useCategoryData({ type, page });
  const isLoading = !data;

  useScrollToTopOnChange([page, type]); //кастомный хук для скролла вверх при переходе по пагинации

  useEffect(() => {
    setPage(1);
  }, [type]);

  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className={s.container}>
      <nav className={s.navigation}>
        {MOVIE_CATEGORIES.map(category => (
          <button
            key={category.key}
            onClick={() => navigate(`/category/${category.key}`)}
            className={`${s.navButton} ${type === category.key ? s.active : ''}`}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <h2 className={s.categoryTitle}>{categoriesTitle[type]}</h2>
      <MovieCard data={data} />
      <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data?.total_pages || 1} />
    </div>
  );
};
