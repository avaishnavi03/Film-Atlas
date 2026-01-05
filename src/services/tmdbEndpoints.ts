export const TMDB_ENDPOINTS = {
  trending: "/trending/movie/day",
  popular: "/movie/popular",
  topRated: "/movie/top_rated",
//   genres="/genre/movie/list",
  movieDetails: (id: number) => `/movie/${id}`,
};
