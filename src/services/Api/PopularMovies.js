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

function getWeeksFirstAndLastDate(week){
    let date1 = new Date();
    let remaindays = 7 - date1.getDay(); 
    let elapseddays = date1.getDay() ;
    if(week === 'current'){
        let firstdayOfweek = new Date(Number(date1) - ((24 * 3600 * 1000) * (elapseddays - 1) )) ;
        let lastdayOfweek = new Date(Number(date1) + ((24 * 3600 * 1000) * remaindays )) ;
        let dateOfFirstdayOfCurrentWeek = getFormatedDate(firstdayOfweek) ;
        let dateOfLastdayOfCurrentWeek = getFormatedDate(lastdayOfweek) ;
        return {
            dateOfFirstdayOfCurrentWeek,
            dateOfLastdayOfCurrentWeek
        };
    }
    if(week === 'next'){
        let firstdayOfweek = new Date((Number(date1)+(24*3600*1000*7)) - ((24 * 3600 * 1000) * (elapseddays - 1) )) ;
        let lastdayOfweek = new Date((Number(date1)+(24*3600*1000*7)) + ((24 * 3600 * 1000) * remaindays )) ;
        let dateOfFirstdayOfNextWeek = getFormatedDate(firstdayOfweek) ;
        let dateOfLastdayOfNextWeek = getFormatedDate(lastdayOfweek) ;
        return {
            dateOfFirstdayOfNextWeek,
            dateOfLastdayOfNextWeek
        };

    }
    

   

}





function fetchAllComingThisWeek(){
    //this method is for fetching this week movies and tv shows 
    const {dateOfFirstdayOfCurrentWeek, dateOfLastdayOfCurrentWeek} = getWeeksFirstAndLastDate('current');

    return Api.get('3/discover/movie?api_key='+ApiEndpoints.API_KEY+'&language=en-US&region=IN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.gte='+dateOfFirstdayOfCurrentWeek+'&release_date.lte='+dateOfLastdayOfCurrentWeek+'&with_watch_monetization_types=flatrate');
}






function fetchAllComingNextWeek(){
    //this method is for fetching next week movies and tv shows 
    let {dateOfFirstdayOfNextWeek, dateOfLastdayOfNextWeek} = getWeeksFirstAndLastDate('next');
    
    return Api.get('3/discover/movie?api_key='+ApiEndpoints.API_KEY+'&language=en-US&region=IN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.gte='+dateOfFirstdayOfNextWeek+'&release_date.lte='+dateOfLastdayOfNextWeek+'&with_watch_monetization_types=flatrate');
}



export { fetchPopularMovies ,fetchPopularTvShows,fetchAllComingThisWeek ,fetchAllComingNextWeek}