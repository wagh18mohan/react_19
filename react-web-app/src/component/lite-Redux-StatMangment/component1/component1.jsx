import { useContext } from "react"
import { UserDataContext, useUserData } from "../common";
export default function Component1(){

    // var userData = useContext(UserDataContext)
  
    var data = useUserData();
    console.log('data',data);
    return (
        <>
        <hr/>
        <br/>
        {/* component1 - {userData.userName} */}
        component1 - {data.userName} - {data.age}
        
        </>
    )
}