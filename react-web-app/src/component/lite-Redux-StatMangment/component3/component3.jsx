
import { useContext } from "react"
import { UserDataContext, useUserData, useUserDispatcher } from "../common";
export default function Component3(){
// var userData = useContext(UserDataContext);
 var dispatcher = useUserDispatcher();
 var data = useUserData();

 function handleButtonClick(event){
    dispatcher({type:'increment'})
 }
    return (
        <>
        <hr/>
        <br/>
     
        <div>
               {/* component3 - {userData.userName} */}
        component3 - {data.userName} - {data.age} -
             <button onClick={handleButtonClick}>Increment</button>
        </div>
       
        
        </>
    )
}