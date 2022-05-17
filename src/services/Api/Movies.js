import Api from '../Api';

import {ApiEndpoints} from '../Api'

function fetchMoviesgenres(){
    //this method is for fetching popular movies
 
    return Api.get(ApiEndpoints.MOVIES_GENRE+"?api_key="+ApiEndpoints.API_KEY+'&language=en-US');

}

//https://api.themoviedb.org/3/discover/movie?api_key=6972846da613c2dc360cbfd8ece69be8&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate

function fetchMoviesBasedOnGenre(genreId,page){
    return Api.axiosInstance.get(ApiEndpoints.MOVIES_BASED_ON_GENRE+"?api_key="+ApiEndpoints.API_KEY+"&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page="+page+"&with_genres="+genreId+"&with_watch_monetization_types=flatrate");
}

export { fetchMoviesgenres , fetchMoviesBasedOnGenre }