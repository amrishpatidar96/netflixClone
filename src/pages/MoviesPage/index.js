import { useEffect, useState ,useRef, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesgenres ,fetchMoviesBasedOnGenre} from '../../services/Api';
import Slick from "../../components/Slick";
import SubHeader from "../SubHeaderPage";

import InfiniteScroll from "../../components/InfiniteScroll";
import React from "react";

function Movies(){

  const observer = useRef() ;


  const lastElementRef = useCallback(node => {

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && ( page < totolPages || !totolPages)) {
        setPage((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []) ;



    const [selectedGenre , setSelectedGenre] = useState();
    const [page , setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const [totolPages, setTotalPages] = useState();

    const dispatch = useDispatch() ; 
    const moviesgenre = useSelector(state=>state.movies.moviesgenre);
    const moviesbasedongenre = useSelector((state) =>state.movies.movies);
    const movies = useSelector((state)=> state.newandpopular.movies);

    function fetchMoviesGenre(){
      return async (dispatch)=>{
          
          try{
              const res = await fetchMoviesgenres();
              dispatch({
                  type:'save_movies_genre',
                  payload:res.data.genres
          });
           
          }
          catch(e){
              console.log(e);
          }
      }
  }

  function fetchMoviesBasedOnGenreId(selectedGenre,page){

      return async (dispatch)=>{
          try{
              setLoading(true);
              const res = await fetchMoviesBasedOnGenre(selectedGenre,page);
              console.log("response",res);
              setTotalPages(res.data.total_pages);
              if(page > 1 ){
                dispatch({
                  type:'append_movie_based_on_genre',
                  payload:res.data.results
              });
              }else
              {
                dispatch({
                  type:'save_movie_based_on_genre',
                  payload:res.data.results
              });
              }
              setLoading(false);
          }
          catch(e){
              console.log(e);
              setLoading(false)
          }
      }
  }

  function genereChangeHandler(genreId){
      console.log(genreId)
      setSelectedGenre(genreId);
      dispatch(fetchMoviesBasedOnGenreId(genreId,page));
  }


  useEffect(()=>{
    if(selectedGenre){
      setPage(1);

    }
  },[selectedGenre]);


  useEffect(()=>{
      
    dispatch(fetchMoviesBasedOnGenreId(selectedGenre,page));
         
  },[page]);



  useEffect(()=>{
        dispatch(fetchMoviesGenre());
    },[dispatch])


    return (
      <React.Fragment>
        <SubHeader
          title="Movies"
          genereChangeHandler={genereChangeHandler}
          genres={moviesgenre}
        ></SubHeader>

        { !selectedGenre ? (
          <React.Fragment>
            <div className="bg-netflixBlack text-netflixWhite flex py-2 px-6">
              Top 10 Movies in India Today
            </div>

            <div className="bg-netflixBlack relative px-6">
              {movies && movies.length > 0 && <Slick content={movies} />}
            </div>
          </React.Fragment>
        ) :(
          <React.Fragment>
            <InfiniteScroll 
          contentBasedOnGenre={moviesbasedongenre}
          lastElementRef = {lastElementRef}
          />
          {/* <div
          ref={loadingref => (loadingRef = loadingref)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div> */}
          </React.Fragment>
       
        )
    
    }

       
      </React.Fragment>
    );

}

export default Movies ; 


