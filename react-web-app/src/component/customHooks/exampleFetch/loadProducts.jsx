import { useEffect } from "react";
import {useFetchApi, useAxiosApi} from "./fetchHook";


export default function LoadProducts(){

    // useEffect(() => {

    //     fetch('https://fakestoreapi.com/products')
    //     // .then((response) => {
    //     //     return response.json();})

    //     .then((response) => response.json())
    //     .then((json) => {
    //         console.log(json)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
        
    //         },[]);

    const {data, loading, error} = useFetchApi('https://fakestoreapi.com/products');

    if(loading){
        return (
            <h3>Data is loading ...</h3>
        )
    } else if(error){
      <h3>Error - {error}</h3>
    } else if (data){

        return (
      
            <>
    
            Products got loaded from API - {JSON.stringify(data)}
            </>
        )
    }

   
}