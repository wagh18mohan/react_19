import useCounterHook from "./counterCustomHooks"

export default function IncDecComp(){

    // var CounterValue = 0;

    var {counter, increment, decrement} = useCounterHook({initialValue:10});

    return (

        <>
       counter - {counter}
       <hr/>
        <button className="btn btn-primary w-50 mb-4 " onClick={increment}>Increment</button>
        <button className="btn btn-danger w-50" onClick={decrement}>Decrement</button>


        </>
    )
}