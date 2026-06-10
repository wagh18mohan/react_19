import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PageHeder from './component/pageheader/pageheder';
import MiddleBlock from './component/pageheader/middleComponent/middleBlock';
import TrendingNew from './component/trendingNew/trendingNew';

function App() {
 

  return (
   <>
   <div className='container'>
    <PageHeder></PageHeder>
    <MiddleBlock></MiddleBlock>
    <TrendingNew></TrendingNew>
   </div>
   <div style={{"minHeight":'500px'}}>

   </div>
   </>
  )
}

export default App
