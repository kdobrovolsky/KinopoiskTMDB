export const MOVIE_CATEGORIES = [
  { key: 'popular', label: 'Popular Movies' },
  { key: 'top-rated', label: 'Top Rated Movies' },
  { key: 'upcoming', label: 'Upcoming Movies' },
  { key: 'now-playing', label: 'Now Playing Movies' },
] as const;

export const INITIAL_FILTERS = {
  sort_by: 'popularity.desc',
  with_genres: '',
  'vote_average.gte': '0',
  'vote_average.lte': '10',
  page: 1,
};

export const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Popularity (Descending)' },
  { value: 'popularity.asc', label: 'Popularity (Ascending)' },
  { value: 'vote_average.desc', label: 'Rating (Descending)' },
  { value: 'vote_average.asc', label: 'Rating (Ascending)' },
  { value: 'release_date.desc', label: 'Release Date (Descending)' },
  { value: 'release_date.asc', label: 'Release Date (Ascending)' },
  { value: 'title.asc', label: 'Title (A-Z)' },
  { value: 'title.desc', label: 'Title (Z-A)' },
];

export const RATING_THRESHOLDS = {
  HIGH: 7,
  MEDIUM: 5,
  LOW: 0,
} as const;
