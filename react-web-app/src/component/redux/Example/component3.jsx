import {  useDispatch } from 'react-redux';
import { increment } from '../slice';

export default function Component3(){

    var dispatcher = useDispatch();
    function handleClick(){

        dispatcher(increment());
    }

    return(

        <>
        component - 3
      <div>
<button onClick={handleClick}>Increment value</button>
      </div>
        
        </>
    )
}