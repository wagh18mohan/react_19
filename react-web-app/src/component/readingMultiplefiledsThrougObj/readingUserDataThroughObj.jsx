import { useState } from 'react';

import '../readingDataFrominputElements/readingData.css';
export default function ReadUserDataThroughObj(){

 const [userDetails, setUserDetails] = useState({});

//  function handleUserNameChange(event){

//     setUserDetails({...userDetails, userName : event.target.value });
//  }
//  function handleAgeChange(event){

//     setUserDetails({...userDetails, userAge : event.target.value});
//  }

 // or second way

 function handleValueChange(event,key){
    setUserDetails({...userDetails, [key]: event.target.value})
 }
    return(
       
        <>
          <ul className='userRegPage'>
            <li className="title">
                user Registration page
            </li>
            <li>
             {/* <input type="text" placeholder='Enter user name' onChange={handleUserNameChange}/> */}
             <input type="text" placeholder='Enter user name' onChange={ (event) => 
                {handleValueChange(event,'userName')}}/>

            </li>
            <li>
             {/* <input type="number" placeholder='user age' onChange={handleAgeChange}/> */}
             {/* <input type="number" placeholder='user age' onChange={(event) => {setUserAge(event.target.value)}} /> */}
             <input type="number" placeholder='user age' onChange={ (event) => 
                {handleValueChange(event,'userAge')}}/>
            </li>
            <li>
                Gender:
                <input type='radio' value='male' />Male
                <input type='radio' value='female'/>Female
            </li>
            <li>
                Location:

                <select>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="India">Japan</option>
                    <option value="India">China</option>
                 
                </select>
            </li>
            <li>
                <button>save details</button>
            </li>
        </ul>
        <hr/>
    
    {JSON.stringify(userDetails)}
        </>
      
    )
}