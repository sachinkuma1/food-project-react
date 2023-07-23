 import { useState } from "react";
import Title from "./Title";

 

 
 export const Header=function (){
    
    const [isloggedout, Setisloggedout]=useState(true);


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