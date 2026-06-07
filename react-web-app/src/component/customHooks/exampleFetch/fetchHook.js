import { useEffect, useState } from "react";

import axios from "axios";

export function useAxiosApi(url,method='GET'){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
   
    useEffect(() => {
        async function fetchData(){
                 
            axios.get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
                setError("Error while fetching data" + err.message);
            }). finally (() => {
                setLoading(false);
            }) ;
            
        }
        fetchData();
     },[url]);

    return {data, loading,error};
}
export function useFetchApi(url){

 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error,setError] = useState(null);


    useEffect(() => {
        // fetch(url)
        // .then(res=>res.json())
        // .then(json => console.log(json))

        async function fetchData(){
            try{
                const response = await fetch(url);
                const json = await response.json();
                await new Promise(resolve => setTimeout(resolve,2000));// it delay but in real time we not use
                setData(json);

            } catch (err){
                setError("Error while fetching data" + err.message);
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    },[url]);


    return {data, loading,error};

}