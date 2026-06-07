
import useCounterHook from "./counterCustomHooks";
export default function PlusAndMinus(){

    var {counter, increment, decrement} = useCounterHook({initialValue:0});

    return (

        <>
 <b>{counter}</b>
        <button className="btn btn-primary" onClick={increment}>+</button>
        <button className="btn btn-danger"onClick={decrement}>-</button>

        
        </>
    )
}