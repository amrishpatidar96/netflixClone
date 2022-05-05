
const INITIAL_STATE = {movies:[],tvshows:[],comingthisweek:[]} ; 

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'save_popular_movies':
        return {
          ...state,
          movies:[
            ...action.payload],
        };
      
      case 'save_popular_tv_shows':
        return {
          ...state,
          tvshows:[
            ...action.payload
          ]
        }
      
      case 'save_coming_this_week_All':
        return {
          ...state,
          comingthisweek:[
            ...action.payload
          ]
        }

      default:
        return state;
    }
  }
  
  export default userReducer;
  