
import { useState } from 'react';
import './propdriling.css';
export default function PropDriling(){

    const [assetData, setAssetData] = useState({amount:30000});//dummy to avoid lint error

    return(
        <div className='block'>
            <h2>parent container - {assetData.amount}</h2>
            <ChildComponent assets={assetData}></ChildComponent>
        </div>
        
    
    )
}

function ChildComponent({assets}){
// function ChildComponent(props){
    // var amount = assets.amount - 10000;
    return(

        <div className='block'>
            {/* <h2>child component - {props.assets.amount}</h2>
            <GrandChildComponent assets={props.assets}></GrandChildComponent> */}
             {/* <h2>child component - {amount}</h2> */}

            {/* <GrandChildComponent assets={props.assets}></GrandChildComponent> */}

            <h2>child component - {assets.amount}</h2>
            <GrandChildComponent assets={assets}></GrandChildComponent>
            <GrandChildComponent assets={assets}></GrandChildComponent>
        </div>
    );
}

function GrandChildComponent({assets}){

    return(

        <div className='block'>
            <h2>Grand child component - {assets.amount}</h2>
            <GreatGrandChildComponent assets={assets}></GreatGrandChildComponent>
        </div>
    );
}

function GreatGrandChildComponent({assets}){

    return(

        <div className="block">
            <h2> Great Grand child component - {assets.amount}</h2>
        </div>
    );
}