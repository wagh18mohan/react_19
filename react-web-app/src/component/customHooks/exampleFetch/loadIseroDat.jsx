import { useEffect } from "react";
import {useFetchApi, useAxiosApi} from "./fetchHook";

export default function LoadIseroData(){

    // useEffect(() => {

    //  fetch('https://isro.vercel.app/api/centres')
    //  .then(response => response.json())
    //  .then(json => console.log(json))

    // },[]);
    const {data, loading, error} = useFetchApi('https://isro.vercel.app/api/centres');

    if(loading){
        return (
            <>
            <h3> ISRO Data is loading ...</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" srcset="" />
            </>
            
        )
    } else if(error){
      <h3>Error - {error}</h3>
    } else if (data){

        return (
      
            <>
    
    Load ISEO data - {JSON.stringify(data)};
            </>
        )
    }


    // return(


    //     <>
    //     load ISEO data
    //     </>
    // )
}