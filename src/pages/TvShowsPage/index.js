import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesgenres } from '../../services/Api';
import Slick from "../../components/Slick";
import SubHeader from "../SubHeaderPage";
import React from "react";

function Tvshows(){

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

    function genereChangeHandler(event){
        console.log(event.target.value)
        setSelectedGenre(event.target.value);
    }
    const [selectedGenre , setSelectedGenre] = useState("");



    const dispatch = useDispatch() ; 
    const moviesgenre = useSelector(state=>state.movies.moviesgenre);
    const tvshows = useSelector((state) => state.newandpopular.tvshows);


    useEffect(()=>{
        dispatch(fetchMoviesGenre());
    },[])


    return (
        <React.Fragment>
            <SubHeader title="TV Shows" 
    selectedGenre={selectedGenre} 
    genereChangeHandler={genereChangeHandler}
    genres={moviesgenre}
    ></SubHeader>
    <div className="bg-netflixBlack text-netflixWhite flex py-2 px-6 ">Top 10 Movies in India Today</div>

      <div className="bg-netflixBlack relative px-6">
        {tvshows.length > 0 && <Slick content={tvshows} />}
      </div>
        </React.Fragment>
    
    );

}

export default Tvshows ; 

