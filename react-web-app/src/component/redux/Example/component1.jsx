import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './counterSlice';

export default function Component1(){

     const count = useSelector((state) => state.counter.value);
      const userName = useSelector((state) => state.counter.name);
//   const dispatch = useDispatch();
    return(

        <>
        component - 1 - {count} - {userName}
        </>
    )
}