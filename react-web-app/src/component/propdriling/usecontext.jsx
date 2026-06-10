
import { createContext, useState ,useContext,use} from 'react';
import './propdriling.css';
// import './contextObj';

 var UserContextMem = createContext();
 var PersonalDetails = createContext();
export default function UseContextDemo(){

   

    const [assetData, setAssetData] = useState({amount:30000,bankBalance:1000});//dummy to avoid lint error
const [assetData1, setAssetData1] = useState({name:'raj',age:30});
    return(
        <div className='block'>
            <h2> parent container - usecontext {assetData.amount}</h2>

             // add multiple provider like this
             {/* <UserContextMem.Provider value={assetData}>
                <PersonalDetails.Provider value={assetData1}>

                  <ChildComponent></ChildComponent>

                  </PersonalDetails.Provider>
             </UserContextMem.Provider> */}

// Note: adding ".Provider" is optional from latest, in 19 we need use but now it is optional 
<UserContextMem value={assetData}>
                <PersonalDetails value={assetData1}>

                  <ChildComponent></ChildComponent>

                  </PersonalDetails>
             </UserContextMem>
            
        </div>
        
    
    )
}

function ChildComponent(){
   var assetContext = useContext(UserContextMem);
   // var assetContext = use(UserContextMem); 
    return(

        <div className='block'>
            

            <h2>child component - {assetContext.amount} , bankbal {assetContext.bankBalance}</h2>
            <GrandChildComponent ></GrandChildComponent>
           
        </div>
    );
}

function GrandChildComponent(){

    return(

        <div className='block'>
            <h2>Grand child component -{} </h2>
            <GreatGrandChildComponent ></GreatGrandChildComponent>
        </div>
    );
}

function GreatGrandChildComponent(){

    var assetContext = useContext(PersonalDetails);
    console.log(assetContext);
    return(

        <div className="block">
            <h2> Great Grand child component - {assetContext.name},{assetContext.age}</h2>
        </div>
    );
}