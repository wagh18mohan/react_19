import './trendinNew.css';
import oneImg from '../../assets/trending/one.webp';
import twoImg from '../../assets/trending/two.webp';
import threeImg from '../../assets/trending/three.webp';
import fourImg from '../../assets/trending/four.webp';
import fiveImg from '../../assets/trending/five.webp';
import sixImg from '../../assets/trending/six.webp';
import sevenImg from '../../assets/trending/seven.webp';
import eightImg from '../../assets/trending/eight.webp';
import nineImg from '../../assets/trending/nine.webp';
import tenImg from '../../assets/trending/ten.webp';
export default function TrendingNew(){
    // const values = [oneImg, twoImg, threeImg, fourImg, fiveImg, sixImg, sevenImg, eightImg, nineImg, tenImg];
    const values = ["oneImg", "twoImg", "threeImg", "fourImg", "fiveImg", "sixImg", "sevenImg", "eightImg",
     "nineImg", "tenImg"];
    var data ={
      oneImg:oneImg,twoImg:twoImg, threeImg:threeImg, fourImg:fourImg, fiveImg:fiveImg, sixImg:sixImg, 
      sevenImg:sevenImg,eightImg:eightImg, nineImg:nineImg, tenImg:tenImg
    }
    
    var prevIncrement = 0;
    var handlePrevClick = ()=>{
      prevIncrement +=90;

      console.log('translateX(' + prevIncrement + 'px)');
      document.querySelector(".sliderTracker").style.transform = 'translateX(' + prevIncrement + 'px)';
    }
    // 
    var nextIncrement = 0;
    var handleNextClick = ()=>{
      nextIncrement +=-90;

      console.log('translateX(' + nextIncrement + 'px)');
      document.querySelector(".sliderTracker").style.transform = 'translateX(' + nextIncrement + 'px)';
    }
    return(
   <div className='trending-new'>
 <h2>Trending Now</h2>
 <div className='trendingSlider'>
  <div className="prevbtn" onClick={handlePrevClick}>&lt;</div>
  <div className="sliderContainer">
    <div className="sliderTracker">

    {
//  values.map((item, index) => (
//           <div className="dimentions" key={index} style={{ backgroundImage: `url(${item})` }}>
//           </div>
//         ))
        values.map((item, index) => (
          <img className="dimentions" src={data[item]} key={index} alt='img'/>
          
        ))
        }
    </div>

  </div>


 <div className="nextbtn" onClick={handleNextClick}>&gt; </div>
 </div>

   </div>

       
    );
}