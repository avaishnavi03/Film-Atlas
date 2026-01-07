export const TMDB_ENDPOINTS = {
  trending: "/trending/movie/day",
  // popular: "/movie/popular",
  topRated: "/movie/top_rated",
//   genres="/genre/movie/list",
 trendingTV: "/trending/tv/day",
topRatedTV: "/tv/top_rated",

  movieDetails: (id: number) => `/movie/${id}`,
  tvDetails: (id: number) => `/tv/${id}`,
};
