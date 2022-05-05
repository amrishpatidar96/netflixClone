import React, { Component } from "react";
import Slider from "react-slick";

import { ApiEndpoints } from "../services/Api";

import Card from "./Card";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="bg-netflixBlack bg-opacity-75  rounded-full absolute top-0 bottom-0 m-auto right-5 w-6 h-6  z-10 text-white text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className +"bg-netflixBlack bg-opacity-75  rounded-full absolute top-0 bottom-0 m-auto left-5 w-6 h-6  z-10 text-white text-xl"}
    //   style={{ ...style, display: "block" , content:"<"}}
    //   onClick={onClick}
    // >{"<"}</div>
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="bg-netflixBlack bg-opacity-75  rounded-full absolute top-0 bottom-0 m-auto left-5 w-6 h-6  z-10 text-white text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
  );
}

export default class Slick extends Component {

  state = { showCard : false }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1560,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            
          }
        }
      ]
    };

    let slides = (<Slider {...settings}>
      {
          this.props.content && this.props.content.length > 0  && this.props.content.map((obj)=>{

              return (
                <img
                src={ApiEndpoints.IMG_BASE_URL + obj.poster_path}
                alt="not found"
                className="h-48 rounded-md object-fill p-1 aspect-square"
                key={obj.id}
                />

           
          
            );


          })

         
      }
       
  </Slider>)

  let loader = (<div className="w-full h-full flex items-center justify-center"><svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg></div>);

let y = this.props.content.length > 0 ? slides : loader ;
    return y;
  }
}