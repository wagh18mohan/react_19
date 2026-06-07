import { useEffect,useState } from "react"


export default function UseEffectDemo(){

    const [theme, setTheme] = useState('red');
    const [bgcolor, setBgColor] = useState('yellow');


    useEffect(() =>{

        console.log('use effect got invoked');
        document.querySelector('#container').style.color=theme;
        // document.querySelector('#container').style.backgroundColor=bgcolor;
        document.querySelector('#container').style['background-color']=bgcolor; // second way style add


    }, [theme, bgcolor]);

    return(
        <>
        
        <select onChange={(event) => {setTheme(event.target.value)}} >
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="red">Red</option>
            <option value="green">green</option>

        </select>
        Background color <select onChange={(event) => {setBgColor(event.target.value)}}>
            <option value="red">Red</option>
            <option value="blue">blue</option>
            <option value="red">Red</option>
            <option value="green">green</option>

        </select>
        <div id="container"> demo on useEffect</div>
        </>
    )
}