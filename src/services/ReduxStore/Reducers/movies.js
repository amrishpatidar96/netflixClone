
const INITIAL_STATE = {moviesgenre:[],movies:[]} ; 

function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'save_movies_genre':
        return {
          ...state,
          moviesgenre:[
            ...action.payload],
        };
        
      case  'save_movie_based_on_genre':
        return {
          ...state,
          movies : [...action.payload]
        }
      case 'append_movie_based_on_genre':
        return {
          ...state,
          movies:[...state.movies,...action.payload]
        }
      default:
        return state;
    }
  }
  
  export default moviesReducer;
  