import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopularMovies, fetchPopularTvShows,fetchAllComingThisWeek,ApiEndpoints } from "../../services/Api";

import Slider from "../../components/Slider";

import Slick from "../../components/Slick";

function NewandPopularPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.newandpopular.movies);
  const tvshows = useSelector((state) => state.newandpopular.tvshows);
  const comingthisweek = useSelector((state) => state.newandpopular.comingthisweek);

  function fetchAndSavePopularMovies() {
    return async (dispatch) => {
      try {
        const res = await fetchPopularMovies();
        dispatch({ type: "save_popular_movies", payload: res.data.results });
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    };
  }

  function fetchAndSaveAllComingThisWeek() {
    return async (dispatch) => {
      try {
        const res = await fetchAllComingThisWeek();
        dispatch({ type: "save_coming_this_week_All", payload: res.data.results });
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    };
  }

  function fetchAndSavePopularTvShows() {
    return async (dispatch) => {
      try {
        const res = await fetchPopularTvShows();
        dispatch({ type: "save_popular_tv_shows", payload: res.data.results });
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    };
  }




  useEffect(() => {
    dispatch(fetchAndSavePopularMovies());
    dispatch(fetchAndSavePopularTvShows());
    dispatch(fetchAndSaveAllComingThisWeek());
  }, [dispatch]);



  return (
    <div className="relative z-10 mt-16 bg-netflixBlack font-bold text-sm text-netflixWhite" style={{ marginTop: "60px" }}>
      <div className="mt-4 flex py-2 px-6 ">
        Top 10 Movies in India Today
      </div>
        
       {
       movies.length >0  && <Slick content={movies} />
       
       }

     <div className="mt-4 flex py-2 px-6 ">
        Top 10 TV shows in India Today
      </div>
    
      {
       tvshows.length >0  && <Slick content={tvshows} />
       
       }

    <div className="mt-4 flex py-2 px-6 ">
       Coming this Week 
    </div>

       {
            comingthisweek.length >0  && <Slick content={comingthisweek} />
       }

    </div>
  );
}

export default NewandPopularPage;
