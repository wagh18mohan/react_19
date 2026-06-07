import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css';


// import ApiCallDemo from './component/apicalls/apicalls';
// import UseStateDemo from './component/usestate/useStatedemo';
// import EventHandlingDemo from './component/evenetHandling/eventHandlingdemo';
// import ReadingDataFromInputElement from './component/readingDataFrominputElements/readingDynamicData';
// import ReadUserDataThroughObj from './component/readingMultiplefiledsThrougObj/readingUserDataThroughObj';
// import UseEffectDemo from './component/useEffectHook/useEffect';
// import DemoTwoWayDataBinding from './component/twoWayDataBinding/demoTwoWayDataBinding';

// import FormDemo from './component/FormsDemo/formDemo';
// import PropsDemo from './component/props/propsDemo';
// import ProductDetails from './component/productDetails/productDetails';
// import IncDecComp from './component/customHooks/incrementAndDecDemo';
// import PlusAndMinus from './component/customHooks/plusAndMinus';
// import LoadProducts from './component/customHooks/exampleFetch/loadProducts';
// import LoadIseroData from './component/customHooks/exampleFetch/loadIseroDat';
// import DemoDom from './component/useRefHook/Demo_dom';
// import RefUsage_Cleanup from './component/useRefHook/refUsage_Cleanup';
// import MutableOjREf from './component/useRefHook/mutableObjRef';
// import PropDriling from './component/propdriling/propDriling';
// import UseContextDemo from './component/propdriling/usecontext';
// import ParentAccesingChildData from './component/parentAcceingChildData/callbackDem';
// import UseReducerDemo from './component/useReducer/useReducerDemo';
// import UseReducerDemo2 from './component/useReducer/useReducerDemo2';
// import IncermenterDecrementer from './component/useReducer/incermentAndDecrUseReducer';

// import { UserDataContext, initialState } from './component/lite-Redux-StatMangment/common';
// import Component1 from './component/lite-Redux-StatMangment/component1/component1';
// import Component2 from './component/lite-Redux-StatMangment/component2/component2';
// import Component3 from './component/lite-Redux-StatMangment/component3/component3';
// import { ProviderComponent } from './component/lite-Redux-StatMangment/providercopmonent';

// import Component1 from './component/redux/Example/component1';
// import Component2 from './component/redux/Example/component2';
// import Component3 from './component/redux/Example/component3';
// import store from './component/redux/store';
// import { Provider } from 'react-redux';

//routing

// import Footer from './component/routing/footer';
// import Header from './component/routing/header';
// import MainBlock from './component/routing/mainBlock';
// import Demo from './component/higerOrderComponent/higherOrderComp';
import Memodemo from './component/apicalls/Memo/memoDemo';

function App() {

//  const [showProductDetails, setShowProductDetails] = useState(false);

  return (
    <>
    {/* <button onClick={() => setShowProductDetails(!showProductDetails)}>  Toggle product details</button> */}
     {/* <UseStateDemo></UseStateDemo> */}
     {/* <EventHandlingDemo></EventHandlingDemo> */}
     {/* <ReadingDataFromInputElement></ReadingDataFromInputElement> */}
     {/* <DemoTwoWayDataBinding></DemoTwoWayDataBinding> */}
     {/* <ReadUserDataThroughObj></ReadUserDataThroughObj> */}
     {/* <UseEffectDemo></UseEffectDemo> */}
     {/* <ApiCallDemo></ApiCallDemo> */}
         {/* <FormDemo></FormDemo> */}
        {/* <PropsDemo userName="Jhon" age="25" profession="Engineer" className="test" id="container"
        backgroundColor="red"></PropsDemo>
        <PropsDemo userName="mohan" age="35" profession="Engineer" className="test" id="container"></PropsDemo> */}
    
    {/* <ProductDetails></ProductDetails> */}

    {/* { showProductDetails && 
     <ProductDetails></ProductDetails>
    } */}
{/* 
    <IncDecComp></IncDecComp>

    <div>
      <hr/>
      <PlusAndMinus></PlusAndMinus>
    </div> */}

    {/* <LoadProducts></LoadProducts>
    <hr/>
    <LoadIseroData></LoadIseroData> */}
    {/* <DemoDom></DemoDom> */}
    {/* <RefUsage_Cleanup></RefUsage_Cleanup> */}
    {/* <MutableOjREf></MutableOjREf> */}
    {/* <PropDriling></PropDriling> */}
    {/* <UseContextDemo></UseContextDemo> */}
    {/* <ParentAccesingChildData></ParentAccesingChildData> */}
    {/* <UseReducerDemo></UseReducerDemo> */}
    {/* <UseReducerDemo2></UseReducerDemo2>
    <hr/>
    <IncermenterDecrementer></IncermenterDecrementer> */}

    {/* <UserDataContext value={initialState}> */}
    {/* <ProviderComponent>

    <Component1></Component1>
    <Component2></Component2>
    <Component3></Component3>

    </ProviderComponent> */}

    {/* </UserDataContext> */}
   
{/* <Provider store={store}>
   <Component1></Component1>
   <hr/>
   <Component2></Component2>
   <hr/>
   <Component3></Component3>
   <hr/>
   </Provider> */}

{/* <Header></Header>

<MainBlock> </MainBlock>
   
<Footer></Footer> */}
{/* <Demo></Demo> */}
<Memodemo></Memodemo>

    </>
  )
}

export default App
