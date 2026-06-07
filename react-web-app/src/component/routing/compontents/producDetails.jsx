import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ProductDetails(){

    const [productDetails, setProductDetails] = useState([]);

    var dataUrl = 'https://fakestoreapi.com/products';

useEffect(() =>{

    axios.get(dataUrl).then((res)=>{
        setProductDetails(res.data)
    })

},[])
    return(

        <>
        
    <div>
        
        <ul className="detailsContainer">
            {
            productDetails.map((details) => (
                 
                 <ul>
                    <li>
                        <img src={details.image} alt="d" />
                    </li>
                    <li>Product Name - {details.title}</li>
                    <li>Price - {details.price}</li>

                    <li>Description - {details.description}</li>
                    {/* <li>
                        <Link to={/singleProductDetails/ + details.id}> 
                        <button className="btn btn-primary">View details</button>
                        </Link>
                    </li> */}

                    {/* you can pass multiple parameter */}
                   <li>
                    {/* queryparam use at last */}
                        {/* <Link to={/singleProductDetails/ + details.id + '/' + details.rating.count + '?a=20&b=30'}>  */}
                        <Link to={/singleProductDetails/ + details.id + '/' + details.rating.count}> 
                        <button className="btn btn-primary">View details</button>
                        </Link>
                    </li>
                 </ul>

            ))
        }
        </ul>
    </div>        
        </>
    )
}