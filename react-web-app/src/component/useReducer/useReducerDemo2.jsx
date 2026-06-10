import { useEffect, useReducer, useState } from "react"

var userRegistrationDetails = {
    userName:'',
    userAge:'',
    userEmail:'',
    userLocation:'',
    userSal:'',
    userPf:'',
    companyName:'mahindra',
    location:'pune',
    productDetails:[],  // thsi comes fromserver or api
    userAccountDeatials:[]  // thsi comes fromserver
};

function reducer(state, action){
    //logic of updating state value based on action

    console.log(state);
    console.log(action);
   
    return {...state, [action.type]: action.value};
}

export default function UseReducerDemo2(){
const [state, dispatch] = useReducer(reducer, userRegistrationDetails);

function showData(){
     console.log('state');
    console.log(state);

}


useEffect(() => {
    //currenly this hardcoded but it come through API call
    dispatch({type:'productDetails', value:[{name:'laptop',priz:2000}]})
},[]);

    return(

        <>
    <h3>user ragistration page</h3>

     <ul>
        <li>
            <input type="text" placeholder="Enter user name" 
            onChange={(event) => { dispatch({type:'userName', value:event.target.value})} }/>
        </li>
        <li>
            <input type="number" placeholder="Enter user age"
             onChange={(event) => { dispatch({type:'userAge', value:event.target.value})} } />
        
        </li>
          <li>
            <input type="email" placeholder="Enter user email" 
            onChange={(event) => { dispatch({type:'userEmail', value:event.target.value})} } />
        
        </li>
          <li>
            <input type="text" placeholder="Enter user location" 
            onChange={(event) => { dispatch({type:'userLocation', value:event.target.value})} }/>
        
        </li>
          <li>
            <input type="number" placeholder="Enter user salary" 
            onChange={(event) => { dispatch({type:'userSal', value:event.target.value})} }/>
        
        </li>
        <li>
            <input type="number" placeholder="Enter user pf"
            onChange={(event) => { dispatch({type:'userPf', value:event.target.value})} } />
        
        </li>
        <li>
            <button onClick={showData}>Save Data</button>
        </li>
     </ul>
        </>
    )
}