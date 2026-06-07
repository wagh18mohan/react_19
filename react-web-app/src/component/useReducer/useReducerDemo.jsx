import { useState } from "react"


export default function UseReducerDemo(){

//   function arrayReducer(){

//     var data = [2,5,6,7,8];
//        console.log(data);

//        var result = data.reduce((accumulator, currvlaue) => {return accumulator + currvlaue},0);

//         console.log("Result ", result);
//   }
//   arrayReducer();



const [userName, setUserName] = useState('');
const [userAge, setUserAge] = useState('');

function handleNameChange(event){
    setUserName(event.target.value);
}
function handleAgeChange(event){
    setUserAge(event.target.value);
}
function showData(){
    var data = {userName,userAge};
    console.log(data);
}

    return(

        <>
    <h3>user ragistration page</h3>

     <ul>
        <li>
            <input type="text" placeholder="Enter user name" onChange={handleNameChange}/>
        </li>
        <li>
            <input type="number" placeholder="Enter user age" onChange={handleAgeChange}/>
        
        </li>
        <li>
            <button onClick={showData}>Save Data</button>
        </li>
     </ul>
        </>
    )
}