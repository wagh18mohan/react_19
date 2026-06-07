
import { useState } from 'react';
import '../readingDataFrominputElements/readingData.css';

export default function ReadingDataFromInputElement(){

const [userName, setUserName] = useState('');
const [userAge, setUserAge] = useState(0);
const [userGender, setUserGender] = useState('');
const [countryName, setCountryName] = useState('');

    function handleUserNameChange(event){
     setUserName(event.target.value);
    }

    function handleUserAge(event){
        setUserAge(event.target.value);
    }

    function handleGenderChange(gender){
        setUserGender(gender)
    }

    function handleCountryChange (event){
     setCountryName(event.target.value);
    }
    return(

        <>
        <ul className='userRegPage'>
            <li className="title">
                user Registration page
            </li>
            <li>
             <input type="text" placeholder='Enter user name' onChange={handleUserNameChange}/>
            </li>
            <li>
             <input type="number" placeholder='user age' onChange={handleUserAge} />
             {/* <input type="number" placeholder='user age' onChange={(event) => {setUserAge(event.target.value)}} /> */}
            </li>
            <li>
                Gender:
                <input type='radio' value='male' onChange={() => {handleGenderChange('male')}} />Male
                <input type='radio' value='female' onChange={() => {handleGenderChange('female')}}/>Female
            </li>
            <li>
                Location:

                <select onChange={handleCountryChange}>
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
        <ul>
            <li>
                User name is - { userName }
            </li>
            <li>
                User Age is - { userAge }
            </li>
            <li>
                User Gender is - {userGender}
            </li>
            <li>
                country name is - {countryName}
            </li>
        </ul>
        </>
    )
}