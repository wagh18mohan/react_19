import { useState, useRef, useEffect } from "react";
export default function MutableOjREf(){

    const [counter, setCounter] = useState(0);
    var counterRef = useRef(null);



    // useEffect(() => {

    //     return(() => {
    //         clearInterval(counterRef.current);
    //     })
    // },[])

    const handleStartTimer = () => {

    counterRef.current = setInterval(() => {
          setCounter(counter => counter + 1);
        // setCounter(prevCounter => prevCounter + 1);
        console.log("counter value", counter);
     },1000)
}

const handleStoptTimer = () =>{
    clearInterval(counterRef.current);
}

    return(

        <>
      useRef
      <div className="m-auto">
            <button className="" onClick={handleStartTimer}>Start</button>
            <button className="" onClick={handleStoptTimer}>Stop</button>
            <div>{counter}</div>
     </div>

        </>
    )
}