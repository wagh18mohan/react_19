
import { useReducer } from "react";

import { intialCounterState } from "./reducerstore";

// var initialstate = {counter:10}


// note for reducer alos we can creat new file and import it 
function reducer(state, action){

    switch(action.type){
        case 'inc':
            return {counter: state.counter + 1};
        case 'dec':
            return {counter: state.counter - 1};
    }
}
export default function IncermenterDecrementer(){

    // var [state, dispatcher] = useReducer(reducer, initialstate);

     var [state, dispatcher] = useReducer(reducer, intialCounterState);


    return(

        <>
        incementer decremnte

        <b>{state.counter}</b>
<div>
  
  <button onClick={() => {dispatcher({type:'inc'})}}> + </button>
        <button onClick={() => {dispatcher({type:'dec'})}}> - </button>

</div>
      
        
        </>
    )
}