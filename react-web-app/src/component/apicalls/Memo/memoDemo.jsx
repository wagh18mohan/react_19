import React, { useState } from "react";



// function Child({value}){
var Child = React.memo(({value}) =>{
console.log("child component rendered");
    return (
        <div>
            <b> value from child comp is - {value}</b>
        </div>
    

)
})
export default function Memodemo(){

    const [counter,setCounter] = useState(0);
    const [diffValue,setdiffValue] = useState(0);


    return(

        <div>
        <div>
            count value - {counter}
        </div>
        <Child value={counter}></Child>
        <hr></hr>

         <div>
            diff value - {diffValue}
        </div>
        <Child value={diffValue}></Child>

        <button onClick={() => {setCounter(counter + 1)}}>Inc-count</button>
        <button onClick={() => {setdiffValue(diffValue + 1)}}>diff Inc-count</button>

        </div>
    )
}