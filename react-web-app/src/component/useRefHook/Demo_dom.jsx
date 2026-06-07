import React,{ useRef } from "react";

export default function DemoDom (){

    const nameEleRef = useRef(null);
    const ageEleRef = useRef(null);


    function handleFocus(){
         nameEleRef.current.focus();
    }
function handleReset(){
    console.log(nameEleRef.current.value);
         nameEleRef.current.value= "" ; //document .getElementById("nameinput").value="";
         ageEleRef.current.value = 0 ;  
        //  ageEleRef.current.style.color = 'red' ;   

        
        }
    return (

        <div>
       <h2>Demo of usefull hook - Accessing dom element</h2>

       <ul>
        <li>
            <input type="text" placeholder="username" ref={nameEleRef} />
        </li>
         <li>
            <input type="text" placeholder="userAge" ref={ageEleRef}/>
        </li>
         <li>
           <button onClick={handleFocus}>Get Focus</button>
           <button onClick={handleReset}>Reset</button>

        </li>

       </ul>
        </div>
    )

}