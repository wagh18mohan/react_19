
import './propsDemo.css'
// export default function PropsDemo(){

// return(

//     <h2>Props demo compmonent</h2>
// )
// }

// - what is recomedation :
// if i want invoked componet  on same file in that case u can use arrow fuction,
//  - if you are not using classes so u dont need to ise this orator so u can use normal fuction.
  
//or

// props is obreciing as object and it name shodul be any no reured to writ only props. 
// it simply formal parameter

//  in this case it will show all prop. or attribut like IdleDeadline, class if i want only perticluar StylePropertyMap,
//   so i can direct use thatcalled as destructuring.
// var PropsDemo = (props) => {

var PropsDemo = ({userName,age,profession,backgroundColor}) => {

    // console.log(props);
    // var details = {
    //     firstName: 'Jhon',
    //     lastName : 'doe',
    //     age :30,
    //     profession:'Developer'
    // }
    return(

        <>
        {/* <div className="visitingCard">
            <h2>{ details.firstName}  { details.lastName}</h2>
            <hr/>
            <ul>
                {/* <li>First Name: { details.firstName}</li>
                <li>Last Name: { details.lastName}</li> */}
                {/* <li>Age: { details.age}</li>
                <li>Profession: { details.profession}</li> */}

                
            {/* </ul>
            <hr/> */}
        {/* </div>  */}

        {/* using props data rendring */}

        {/* <div className="visitingCard">
            <h2>{ props.userName} </h2>
            <hr/>
            <ul>
           
                <li>Age: { props.age}</li>
                <li>Profession: { props.profession}</li>

                
            </ul>
            <hr/>
        </div> */}

        

        <div className="visitingCard" style={{backgroundColor:backgroundColor}}>
            <h2>{ userName} </h2>
            <hr/>
            <ul>
                {/* <li>First Name: { details.firstName}</li>
                <li>Last Name: { details.lastName}</li> */}
                <li>Age: {age}</li>
                <li>Profession: { profession}</li>

                
            </ul>
            <hr/>
        </div>
        </>
    )
}

export default PropsDemo;