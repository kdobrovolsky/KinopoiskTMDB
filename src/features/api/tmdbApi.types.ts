// Базовые типы для фильма
export type TMDBMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Ответ для списка фильмов
export type TMDBMoviesResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

// Параметры запроса для популярных фильмов
export type PopularMoviesParams = {
  language?: string;
  page?: number;
  region?: string;
};

// Параметры запроса для поиска
export type SearchMoviesParams = {
  query: string;
  language?: string;
  page?: number;
};

// Параметры для других категорий
export type MoviesParams = {
  language?: string;
  page?: number;
};

// Типы для ошибок
export type TMDBError = {
  status_code: number;
  status_message: string;
  success: boolean;
};

// Состояния загрузки
export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

// Для избранных фильмов (localStorage)
export type FavoriteMovie = {
  id: number;
  title: string;
  posterUrl: string | null;
  voteAverage: number;
};


export type TMDBUpcomingResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

export const categoriesTitle: Record<string, string> = {
  'popular': 'Popular Movies',
  'top-rated': 'Top Rated Movies',
  'upcoming': 'Upcoming Movies',
  'now-playing': 'Now Playing Movies'
};

// Тип для актера в фильме
export type MovieCast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

// Тип для члена съемочной группы
export type MovieCrew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

// Основной тип ответа для актеров и съемочной группы
export type MovieCreditsResponse = {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
}

// Тип для похожего фильма
export type SimilarMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Тип ответа для похожих фильмов
export type SimilarMoviesResponse = {
  page: number;
  results: SimilarMovie[];
  total_pages: number;
  total_results: number;
}


export type MovieDetailsResponse = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}