import { Link, Route, Routes,useNavigate } from "react-router-dom";
import Home from "./compontents/home";
import Careers from "./compontents/careers";
import ProductDetails from "./compontents/producDetails";
import Contacts from "./compontents/contact";
import SingleProductDetails from "./compontents/singleProducts";
import Contact1 from "./compontents/subcomponent/contact1";
import Contact2 from "./compontents/subcomponent/contact2";
import Contact3 from "./compontents/subcomponent/contact3";


export default function MainBlock(){
      var navigate = useNavigate();

function handleCareerClick (){
 navigate('/careers');
}
    return(


        <>
        <main>

            <div className="mainContainer">
                <div className="leftBlock">
                 <nav>
                    <ul>
                
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/productDetails">Product details</Link></li>
                        {/* <li>
                            <Link to="/careers">Career </Link>
                        </li> */}
                        <li>
                            <div onClick={handleCareerClick}>Career </div>
                        </li>

                        <li><Link to="/contact">contact </Link></li>

                    </ul>
                 </nav>
                </div>
                <div className="rightBlock">
                  <div className="container">
                   <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                      <Route path="/contact" element={<Contacts></Contacts>}>
                        <Route path="contact1" element={<Contact1></Contact1>}></Route>
                        <Route path="contact2" element={<Contact2></Contact2>}></Route>
                        <Route path="contact3" element={<Contact3></Contact3>}></Route>

                      </Route>
                      <Route path="/careers" element={<Careers></Careers>}></Route>
                      <Route path="/productDetails" element={<ProductDetails></ProductDetails>}></Route>
                       {/* <Route path="/singleProductDetails/:productId" element={<SingleProductDetails></SingleProductDetails>}>
                       </Route> */}

                       <Route path="/singleProductDetails/:productId/:ratingCount" element={<SingleProductDetails></SingleProductDetails>}>
                       </Route>
                   </Routes>

                  </div>
                </div>
            </div>
       
        </main>

        </>
    )
}