import { useState } from "react";
import ChildComponent from "./childCopm";

export default function ParentAccesingChildData(){

    const [launchersLen, setLaunchersLen] = useState(0);

    function handleChildData(data){
        console.log("Data receiveed fromchild is :", data)
        setLaunchersLen(data);
    }
    return(

        <div>
            parrent accesing data
            Total Items : {launchersLen}

            <hr/>
            <ChildComponent parentCallback={handleChildData}></ChildComponent>
        </div>
    )
}

