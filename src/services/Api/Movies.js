import Api from '../Api';

import {ApiEndpoints} from '../Api'

function fetchMoviesgenres(){
    //this method is for fetching popular movies
 
    return Api.get(ApiEndpoints.MOVIES_GENRE+"?api_key="+ApiEndpoints.API_KEY+'&language=en-US');

}


export { fetchMoviesgenres }