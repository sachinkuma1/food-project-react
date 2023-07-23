 import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import About from "./About";

 

 
 export const Header=function (){
    
    const [isloggedout, Setisloggedout]=useState(true);


    return (
        <div className="header">
        <Title/>

        <div className="nav-bar">
          <ul>
            <Link to ="/">Home</Link>
            <Link to ="/About">About</Link>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>{
        (isloggedout)? <button
         onClick={()=>{
          Setisloggedout(false);
         }}
        >Log In</button>:
         <button
          onClick={()=>{
            Setisloggedout(true);
          }}
         >Log Out</button>}
        </div>
    )
}