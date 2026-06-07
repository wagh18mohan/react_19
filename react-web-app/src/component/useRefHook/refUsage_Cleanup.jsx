
import './refUsageClenup.css';
import {useEffect, useState} from 'react';
export default function RefUsage_Cleanup(){

    const [showDialog, setShowDialog] = useState(false);

    useEffect(() =>{
              console.log("component mounted");
                 return() => {
                    console.log("component  unmounted");
                 };
    },[]);

    return (

        <div>
        
        <h2> Ref usage with clenaup example component</h2>
        {
            // useref use for re render only element here not whole compnent and 
            // node is perticular div
            showDialog &&
            <div className="dialog-box" ref={(node) =>{
                // node is perticular div
                node.style.backgroundColor = "lightblue";
                 console.log("dialog box mounted", node);
                 return() => {
                    console.log("dialog box unmounted", node);
                 };
                
            }}>
              dialog box
           </div>
        }
        
        <button onClick={() => {setShowDialog(true)}}>show dialog</button>
        <button onClick={() => {setShowDialog(false)}}>hide dialog</button>


        </div>
    )
}