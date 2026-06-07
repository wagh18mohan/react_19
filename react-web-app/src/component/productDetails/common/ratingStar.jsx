
import RatingStarsImg from '../../../assets/RatingStars.png';
import './ratingstars.css';
// export default function RatingStars({rating:rating}){

export default function RatingStars(props){

// var rating = 3.6;
var rating = props.rating;
var fullStars = Math.floor(rating);
var halfStar = rating % 1 !== 0? 1 : 0;
var emptyStars = 5 - fullStars - halfStar;


    return(

        <>
        {/* <div>ratings copmpnent</div> */}
        {/* <img src={RatingStarsImg} alt="" srcset="" /> */}

          {/* this child show inside copnernt html */}
        {props.children}
        <div className="ratingcontainer" title={"rating -> " + rating}>
         {
            [...new Array(fullStars)].map((item,index) => (
            <div className="fullStar" key={index}></div>
            ))
            
         }
            {
                halfStar == 1 &&
              <div className="halfStar"></div>
            }
           
           {
            [...new Array(emptyStars)].map((item,index) => (
                <div className="disableStar" key={index}></div>
            ))
           }

            

        </div>
        </>
    )
}