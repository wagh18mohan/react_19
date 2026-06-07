import { useActionState, useState } from 'react';
import './formDemo.css';
import {useFormStatus} from 'react-dom';
import axios from 'axios';


// formData is a object it actually hold the form data.
async function HandleFormSubmit(prevState,formData){
// console.log(formData.get('username'));
// console.log(formData.get('password'));
// console.log(formData.get('age'));
// console.log(formData.get('email'));


console.log('prevState');
console.log(prevState);

var userData = {
    username: formData.get('username'),
    password: formData.get('password'),
    age: formData.get('age'),
    email: formData.get('email')

}

// coomented code for sending the form data to server. in real time use this.

//  await axios.post('https://jsonplaceholder.typecode.com/posts',formData)
//  .then((response) => {
//     console.log('response from server');
//  })
await new Promise((r) => setTimeout(r,2000)); // focefully waiting for 2 seconds.
console.log(userData);
if(userData.username === '' || userData.password === '' || userData.age <= 0 || userData.email === ''){
    return {
        msg: 'Please fill all the details correctly'
   }
}else{
    return {
        msg: 'Details been validated'
   }
}
    
    
}
export default function FormDemo (){

    //HandleFormSubmit, {msg: ''} this is two value which is responsible for two parmetr 
    //i.e (prevState,formData)

    const [state, formAction] = useActionState(HandleFormSubmit, {msg: ''});

return(

   
    <>
   <form action={formAction}>
    {/* this will show msg on top of form */}
    {JSON.stringify(state)}  

   <ul>
    <li className="title"> user regitration page</li>

    <li>
        <input type="text" name="username" id="" placeholder='enter username' required />
        
    </li>
    <li>
        <input type="password" name="password" id="" placeholder='enter password' required/>
        
    </li> 
    <li>
        <input type="number" name="age" id="" placeholder='user age' required />
        
    </li>
    <li>
        <input type="email" name="email" id="" placeholder='enter mail' required />
        
    </li>
    <li>
        {/* <button className='btn-submit'>submit</button> */}
        <SubmitButton></SubmitButton>
        
    </li>
    <li>
        Form Status is - {state.msg}
    </li>
   </ul>
   </form>
    </>
)
}

// second compmonent

function SubmitButton(){
const {pending} = useFormStatus();

    return(
        <>
        {pending}
       <button className='btn-submit'>{pending ? 'Submiting...' : 'Submit'}</button>

       </>
    )
    
}