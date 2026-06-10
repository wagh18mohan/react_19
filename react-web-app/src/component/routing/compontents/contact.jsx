import { Link, Outlet } from "react-router-dom";

export default function Contacts(){


    return(

        <>
        
    <div>contact content about to get loaded</div>    

    <div className="tabContainer">
        <div>
            <Link to = 'contact1'> company contact</Link>
           </div>
        <div> 
            <Link to = 'contact2'>main baranch  contact</Link></div>
        <div><Link to = 'contact3'> Employee contact</Link></div>

        </div>   
         <div className="block"></div> 
        <div className="block">
            <Outlet></Outlet>
        </div>
         <div className="block"></div>
        </>
    )
}