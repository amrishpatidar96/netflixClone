
const INITIAL_STATE = {moviesgenre:[]} ; 

function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'save_movies_genre':
        return {
          ...state,
          moviesgenre:[
            ...action.payload],
        };
      
      default:
        return state;
    }
  }
  
  export default moviesReducer;
  