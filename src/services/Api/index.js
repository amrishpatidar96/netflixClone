import ApiWrapper from './ApiWrapper' ; 

import * as ApiEndpoints from './ApiEndpoints';

import {fetchPopularMovies,fetchPopularTvShows,fetchAllComingThisWeek} from './PopularMovies';

export default ApiWrapper ;
export {
    ApiEndpoints,fetchPopularMovies,fetchPopularTvShows,fetchAllComingThisWeek
  };
  