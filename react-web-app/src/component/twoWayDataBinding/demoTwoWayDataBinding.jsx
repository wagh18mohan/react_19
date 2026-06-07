import { useState } from "react";

export default function DemoTwoWayDataBinding(){

    var userName="teena";
    // var userAge = 0;
    var [userAge, setUserAge] = useState(0)

    function handleUserAgeChange(event){
        // userAge = event.target.value;
        setUserAge(event.target.value);
    }
    return(
        <>
        
        <div>
            <h3>one way data binding</h3>
            User name is - {userName}
             <br/>
            <h3>twy way data binding</h3>
            <input type="text" placeholder="user app" value={userAge} onChange={handleUserAgeChange}/>
            <hr/>

            user age is - { userAge }

        </div>
        </>
    )
}