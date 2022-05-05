
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiEndpoints } from "../services/Api";

function Slider(props){

    const [startFlag , setStartFlag] = useState(true);

    const [width,setWidth] = useState(window.innerWidth || document.documentElement.clientWidth || 
        document.body.clientWidth);

    const [colAsPerWidth,setColAsPerWidth] = useState(initsetColAsPerWidth());

    const [currentIndex,setCurrentIndex] = useState(initsetColAsPerWidth());

    const [show , setShow] = useState(initialshow([]));

    function resizeListener(){
        setWidth(window.innerWidth || document.documentElement.clientWidth || 
            document.body.clientWidth);
        console.log("Iam running"+colAsPerWidth);
        
    }

    function initsetColAsPerWidth(){
        console.log(width);
        if(width < 640){
        return 2;
        }
        else if(width >= 640 && width <768){
            return 3 ; 
        }
        else if(width >= 768 && width <1024){
        return 4 ; 
        }
        else if(width >= 1024 && width < 1280){
            return 5 ;
        }
        else{
            return 5 ;
        }
    }

    function initialshow(initshow){
        
        console.log("length = "+initshow.length);

        let index = 0 ; 
        if(!startFlag){
            index = currentIndex ;
        }
            
        console.log("index =  " + index);
        for(let i=index;i<(index+colAsPerWidth);i++){
            initshow.push(i);
        }
        
        return initshow ; 
    }

    function slideIncrementer(){
        //console.log(props.content);

        let tempShow = [] ;
        let remain ;
        let i ;
        console.log("currentIndex+colAsPerWidth"+currentIndex+" "+colAsPerWidth)
        if((currentIndex+colAsPerWidth) > props.content.length ){
            console.log("going more than array length");
            remain = props.content.length % colAsPerWidth ;

            tempShow = show.splice(remain);
            console.log(tempShow);
            while(remain > 0){
 
                tempShow.push(props.content.length-remain);
                remain--;
            }
            
            setCurrentIndex(0);
        }
        else{
            tempShow = initialshow(tempShow);
            console.log(tempShow);
            console.log("currentIndex = "+ currentIndex);
            if((currentIndex+colAsPerWidth) === props.content.length){
                setCurrentIndex(0);
                
            }else
                setCurrentIndex(currentIndex+colAsPerWidth);
                
        }
        setShow(tempShow);
    }

   
    function resetShow(initshow, newCols){
        
        //console.log("length = "+initshow.length);

        let index = 0 ; 
        
        index = currentIndex ;

        if(show[0]=== 0){
            index = 0 ;
        }
               
       // console.log("index =  " + index);
        for(let i=index;i<(index+newCols);i++){
            initshow.push(i);
        }
        console.log(initshow);
        setCurrentIndex(index+newCols);
        return initshow ; 
    }


    
    useEffect(()=>{
        console.log("Iam running");
        window.addEventListener('resize', resizeListener);

        setStartFlag(false);

    },[])


    useEffect(()=>{

        console.log(" setColAsPerWidth "+ width + " "+ colAsPerWidth);
        if(width < 640){
            if(colAsPerWidth !== 2){
                setShow(resetShow([],2));
                setColAsPerWidth(2);
                setCurrentIndex();
            }
        }
        else if(width >= 640 && width <768){
            if(colAsPerWidth !== 3){

                setShow(resetShow([],3));
                setColAsPerWidth(3)
                
            }
        }
        else if(width >= 768 && width <1024){
            if(colAsPerWidth !== 4){
                setShow(resetShow([],4));
                setColAsPerWidth(4)
            }
        }
        else if(width >= 1024 && width < 1280){
            if(colAsPerWidth !== 5){
                setShow(resetShow([],5));
                setColAsPerWidth(5)
            }
        }
        else{
            if(colAsPerWidth !== 5){
                setShow(resetShow([],5));
                setColAsPerWidth(5)
            }
        }


        
    },[width,colAsPerWidth])



    return (<div className="w-full flex items-center ">
    <div className="text-netflixWhite" onClick={()=>{}}>


      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>

    </div>
    <div className="w-full h-48 grid grid-rows-1 grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
       
        {
        

        (show.length > 0 && props && props.content && props.content.length > 0 )  && (show.map((i) => {

               console.log(props.content[i])
                return (
                      <img
                    src={ApiEndpoints.IMG_BASE_URL + props.content[i]['poster_path']}
                    alt="not found"
                    className="w-full rounded-md object-fill h-32  md:h-40 lg:h-48"
                    key={props.content[i]['id']}
                />
                  
                    
                );
            
        
        }))
        
        }

    </div>

    <div className="text-netflixWhite" onClick={slideIncrementer}>


      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>

    </div>
  </div>)
}

export default Slider ;