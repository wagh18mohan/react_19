import { useEffect, useState } from "react";
import axios from "axios";

import './productDetails.css';
import RatingStars from "./common/ratingStar";

export default function ProductDetails(){

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {


        axios.get("https://fakestoreapi.com/products").then((response) => {

        // console.log(response.data);
        // debugger;
        
        setProductDetails(response.data);

        }).catch((err) => {
            console.log(err);
        })
    },[]);

   

    return(
       <div className="ProductDetailsContainer">

      
        

        {/*  inside styel  it will writ in the form og json object .keys and value */}
        {
            productDetails.map((product)=>(

                <div className="card" style={{ "width": "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">{product.price}</h5>
                    <div className="card-title">
                        <RatingStars rating={product.rating.rate}>
                        <p>Rating - </p>
                        </RatingStars>
                        </div>


                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>

         ))
           

         }
        </div>
    )
}