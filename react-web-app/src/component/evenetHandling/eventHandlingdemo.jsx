export default function EventHandlingDemo(){

    function sample(){
        // event is prdefined object gets created automaatically, everytime an action 
   //happens. it holds all the meta data or extra info ( type of event, target element, position where 
   // event occured, etc) of the event been genrated.

        console.log("hello i got invoked");
    }

    function dojob(name){
        console.log("name is " + name);
    }
    return(
        
        <>
        <div>Event Handling Demo</div>
        <button onClick={sample}> click here</button>

        <button onClick={()=> {console.log("second click");}}> 2nd click here</button>
        <button onClick={()=> {dojob('krish')}}> 3rd click </button>


        </>
        

    )
}