
// import { useContext, useReducer } from "react"
// import {  UserDataContext, useUserData, reducer, initialState, useUserDispatcher  } from "../common";
import {   useUserData, useUserDispatcher  } from "../common";
export default function Component2(){

    // const [state, dispatcher] = useReducer(reducer, initialState);
// var userData = useContext(UserDataContext);
 var data = useUserData();   // it come from custome hook

 var dispatcher = useUserDispatcher();

 function handleUpdateAge(){
    // data.age = 50;
    dispatcher({type:'change', payload:{userName:'krish', age:31}})
    //  dispatcher();
 }
    return (
        <>
        <hr/>
        <br/>
        {/* component2 - {userData.userName} */}
        <div>
        component2 - {data.userName} - {data.age} -  
        <button onClick={handleUpdateAge}>Update age</button>
        </div>
        </>
    )
}