import ApiWrapper from "./ApiWrapper";

import * as ApiEndpoints from "./ApiEndpoints";

import {
  fetchPopularMovies,
  fetchPopularTvShows,
  fetchAllComingThisWeek,
  fetchAllComingNextWeek,
} from "./PopularMovies";

import { fetchMoviesgenres ,fetchMoviesBasedOnGenre} from "./Movies";
export default ApiWrapper;
export {
  ApiEndpoints,
  fetchPopularMovies,
  fetchPopularTvShows,
  fetchAllComingThisWeek,
  fetchAllComingNextWeek,
  fetchMoviesgenres,
  fetchMoviesBasedOnGenre
};
