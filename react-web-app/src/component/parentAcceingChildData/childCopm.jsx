import axios from "axios";
import { useEffect, useState } from "react";

 export default function ChildComponent({parentCallback}){ // called as distructring
//or
// export default function ChildComponent(props){

    const [launchers, setLaunchers] = useState([])
  useEffect(() => {

    axios.get('https://isro.vercel.app/api/launchers')
    .then(response =>{
        console.log('data fetch from child component:', response.data);

        setLaunchers(response.data.launchers);
        parentCallback(response.data.launchers.length);
            // props(response.data.length);

    })
    .catch(err => {
        console.log('error fetching data:', err);
    })
  },[])

    return(

        <div>
            child component - {JSON.stringify(launchers)}
        </div>
    )
}