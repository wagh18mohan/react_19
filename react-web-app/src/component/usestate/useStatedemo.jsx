import {useState} from "react";

export default function UseStateDemo(){
    var a =90 ; //static memory

    const [b,setBvalue] = useState(20);// state memory

    //const [userData, setUserData] = useState({name:'mohan',age:'35',gender:'male'});
    // this is anothe way to use multiple stae variable by object in useState

    // usestae hook

    setTimeout(()=>{
      a++;
      console.log('value of a is' + a);
      setBvalue(100);
    },5000)


    return(
        <div>state demo getting rendered - {a}  - b value is {b}</div>
    )
}