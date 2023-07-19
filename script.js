import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";



// this is react way of doing manipulation and this is very tedious 
// const heading1=React.createElement("h1", {}, "heading1")
// const heading2=React.createElement("h1", {}, "heading2");
// const heading3=React.createElement("h1", {}, "heading3");
// const bigdiv=React.createElement("div", {}, [heading1, heading2,heading3]);
// console.log(heading);



// let's use jsx

const Title= function(){
  return (
     <a href="/">
       <img className="header-logo"  src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5653883.jpeg"
       />
      </a>
  )
}


// functional component is nothing but a function 
const Header=function (){
    // agar return wala line multiple line me chale jaye to usko () brcket ke under 
    // band kar do 
    return (
        <div className="header">
        <Title/>

        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        </div>
    )
}

// let's make our restaurent card dynamic means currently it is fixed 
// let's use javascript object for that
// going to use swiggy real data of patna ab tabahi aa jaega





const Restaurentcard=function({name,cloudinaryImageId, area }){

  // console.log(props.restr);
  // console.log(resList[0]);
  // console.log(props.restr==resList[0]);
  return (
    <div className="rest-card">
   <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
   +cloudinaryImageId} alt="res-img"/> 
    <h3>{name }</h3>
    <h3 className="area">{  area}</h3>
   
    </div>
  )
};


const Body=function (){
  return (
    <div className="body-comp">
    {
    resList.map((restaurent)=>{
      return <Restaurentcard  {...restaurent.data.data} key={restaurent.data.data.id}/>
    })};
  
   
   
    </div>
  )
}

const Footer=function (){
  return   <h3>footer</h3>

}

const Applayout=function(){
  return (
    // we can use react.fragement inside another another react.fragement
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
// to render the functional component
root.render(<Applayout/>);
