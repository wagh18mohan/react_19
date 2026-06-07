import { useSelector, useDispatch } from 'react-redux';
import { updateName } from '../slice';
export default function Component2(){
// const count = useSelector((state) => state.counter.value);
const counterValue = useSelector((state) => state.counter.value);
  var dispatcher = useDispatch();
function handleUpdateName(){

    // here we can call api, slice responsiblity like action and dispatechrs
dispatcher(updateName('mohan1'));

}
    return(

        <>
        {/* component - 2 - {count} */}  

         {/* // if cahnge const name add that in binding only */}

          component - 2 - {counterValue}

          <div>
            <button onClick={handleUpdateName}>update name</button>
          </div>
        </>
    )
}