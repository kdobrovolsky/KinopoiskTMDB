import type {
  DiscoverMoviesParams,
  GenresResponse,
  MovieCreditsResponse,
  MovieDetailsResponse,
  SearchMoviesParams,
  SimilarMoviesResponse,
  TMDBMoviesResponse,
} from '@/shared/api/tmdbApi.types.ts';
import { baseApi } from '@/shared/api/baseApi/baseApi.ts';

export const tmdbApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchPopularMovies: build.query<TMDBMoviesResponse, number | void>({
      query: (page = 1) => {
        return {
          url: `movie/popular?page=${page}`,
        };
      },
      providesTags: ['Movies'],
    }),
    fetchTopRated: build.query<TMDBMoviesResponse, number | void>({
      query: (page = 1) => `movie/top_rated?page=${page}`,
      providesTags: ['Movies'],
    }),
    fetchUpcoming: build.query<TMDBMoviesResponse, number | void>({
      query: (page = 1) => `movie/upcoming?page=${page}`,
      providesTags: ['Movies'],
    }),
    fetchNowPlaying: build.query<TMDBMoviesResponse, number | void>({
      query: (page = 1) => `movie/now_playing?page=${page}`,
      providesTags: ['Movies'],
    }),
    fetchSearchMovies: build.query<TMDBMoviesResponse, SearchMoviesParams>({
      query: params => {
        return {
          url: 'search/movie',
          params,
        };
      },
      providesTags: (_result, _error, arg) => [
        'Movies',
        { type: 'Movies', id: `search-${arg.query}` },
      ],
    }),
    fetchCredits: build.query<MovieCreditsResponse, number>({
      query: movie_id => `movie/${movie_id}/credits`,
      providesTags: (_result, _error, movieId) => [{ type: 'Credits', id: movieId }],
    }),
    fetchSimilar: build.query<SimilarMoviesResponse, number>({
      query: movie_id => `movie/${movie_id}/similar`,
      providesTags: (_result, _error, movieId) => [{ type: 'Similar', id: movieId }],
    }),
    fetchMovieDetails: build.query<MovieDetailsResponse, number>({
      query: movie_id => `movie/${movie_id}`,
      providesTags: (_result, _error, movieId) => [{ type: 'MovieDetails', id: movieId }],
    }),
    fetchMovieList: build.query<GenresResponse, void>({
      query: () => `genre/movie/list`,
      providesTags: ['Genres'],
    }),
    fetchDiscoverMovies: build.query<TMDBMoviesResponse, DiscoverMoviesParams>({
      query: params => {
        return {
          url: `discover/movie`,
          params,
        };
      },
      providesTags: (_result, _error, arg) => [
        'Movies',
        { type: 'Movies', id: `discover-${JSON.stringify(arg)}` },
      ],
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchNowPlayingQuery,
  useFetchTopRatedQuery,
  useFetchUpcomingQuery,
  useLazyFetchSearchMoviesQuery,
  useFetchCreditsQuery,
  useFetchSimilarQuery,
  useFetchMovieDetailsQuery,
  useFetchDiscoverMoviesQuery,
  useFetchMovieListQuery,
} = tmdbApi;
