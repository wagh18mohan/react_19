import axios from "axios";
import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleProductDetails(){

    // var params = useParams();
       var {productId} = useParams();   // it productid is a parameter which is pass in 
                                       //  route it will only that
    console.log(productId);
     
    var params = useParams();
     console.log(params);
   const [productData, setProductData] = useState({})
    var apiurl = 'https://fakestoreapi.com/products/' + productId;
    useEffect(()=>{

        axios.get(apiurl).then((res)=>{
        setProductData(res.data);
        })

    },[apiurl]);
console.log(productId);
    return(

        <>
        
       <ul>
        {
            Object.keys(productData).map((key) =>(

                typeof(productData[key]) != 'object' &&
                <li>{key} - {productData[key]}</li>
            ))
        }
       </ul>

       <Link to="/productDetails"> Back</Link>
        </>
    )
}