import Api from '../Api';

import {ApiEndpoints} from '../Api'

function fetchPopularMovies(){
    //this method is for fetching popular movies
 
    return Api.get(ApiEndpoints.POPULAR_MOVIES_ENDPOINT+"?api_key="+ApiEndpoints.API_KEY+'&language=en-US&page=1')

}

function fetchPopularTvShows(){
    //this method is for fetching popular tv shows 
 
    return Api.get(ApiEndpoints.POPULAR_TV_SHOWS_ENDPOINT+"?api_key="+ApiEndpoints.API_KEY+'&language=en-US&page=1')

}


function getFormatedDate(date1){
    let d = date1.getDate();
    let m = date1.getMonth();
    let date = (d < 10 ) ?  "0"+d : d ;
    let month = ((m+1) < 10 ) ?  "0"+(m+1) : m+1 ;
    let year = date1.getFullYear() ;
	return year+"-"+month+"-"+date;
}

function fetchAllComingThisWeek(){
    //this method is for fetching this week movies and tv shows 
    let date1 = new Date();
    let remaindays = 7 - date1.getDay(); ///2
    let elapseddays = date1.getDay() ;
    let firstdayOfweek = new Date(Number(date1) - ((24 * 3600 * 1000) * (elapseddays - 1) )) ;
    let lastdayOfweek = new Date(Number(date1) + ((24 * 3600 * 1000) * remaindays )) ;
    let firstdayOfweekDate = getFormatedDate(firstdayOfweek) ;
    let lastdayOfweekDate = getFormatedDate(lastdayOfweek) ;

    return Api.get('3/discover/movie?api_key='+ApiEndpoints.API_KEY+'&language=en-US&region=IN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.gte='+firstdayOfweekDate+'&release_date.lte='+lastdayOfweekDate+'&with_watch_monetization_types=flatrate');
}

export { fetchPopularMovies ,fetchPopularTvShows,fetchAllComingThisWeek}