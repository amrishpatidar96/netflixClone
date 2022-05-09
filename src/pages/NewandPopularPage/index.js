import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  fetchPopularTvShows,
  fetchAllComingThisWeek,
  fetchAllComingNextWeek,
  ApiEndpoints,
} from "../../services/Api";

import Slick from "../../components/Slick";

function NewandPopularPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.newandpopular.movies);
  const tvshows = useSelector((state) => state.newandpopular.tvshows);
  const comingthisweek = useSelector(
    (state) => state.newandpopular.comingthisweek
  );

  const comingnextweek = useSelector((state)=>state.newandpopular.comingnextweek);

  function fetchAndSavePopularMovies() {
    return async (dispatch) => {
      try {
        const res = await fetchPopularMovies();
        dispatch({ type: "save_popular_movies", payload: res.data.results });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
  }

  function fetchAndSaveAllComingThisWeek() {
    return async (dispatch) => {
      try {
        const res = await fetchAllComingThisWeek();
        dispatch({
          type: "save_coming_this_week_All",
          payload: res.data.results,
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
  }

  function fetchAndSaveAllComingNextWeek() {
    return async (dispatch) => {
      try {
        const res = await fetchAllComingNextWeek();
        dispatch({
          type: "save_coming_next_week_All",
          payload: res.data.results,
        });
        console.log(res);
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
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
  }

  useEffect(() => {
    dispatch(fetchAndSavePopularMovies());
    dispatch(fetchAndSavePopularTvShows());
    dispatch(fetchAndSaveAllComingThisWeek());
    dispatch(fetchAndSaveAllComingNextWeek());
  }, [dispatch]);

  return (
    <div
      className="relative bg-netflixBlack font-medium text-sm md:text-md lg:text-lg xl:text-xl text-netflixWhite"
      style={{ marginTop: "60px" }}
    >
      <div className="mt-4 flex py-2 px-6 ">Top 10 Movies in India Today</div>

      <div className="relative px-6">
        {movies.length > 0 && <Slick content={movies} />}
      </div>

      <div className="mt-4 flex py-2 px-6 ">Top 10 TV shows in India Today</div>

      <div className="relative px-6">
        {tvshows.length > 0 && <Slick content={tvshows} />}
      </div>

      <div className="mt-4 flex py-2 px-6">Coming this Week</div>

      <div className="relative px-6">
        {comingthisweek.length > 0 && <Slick content={comingthisweek} />}
      </div>
      <div className="mt-4 flex py-2 px-6">Coming Next Week</div>
      <div className="relative px-6">
        {comingnextweek.length > 0 && <Slick content={comingnextweek} />}
      </div>
    </div>
  );
}

export default NewandPopularPage;
