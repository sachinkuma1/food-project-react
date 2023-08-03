 import { useState, lazy , Suspense, useContext} from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import About from "./About";
import { useSelector } from "react-redux";




 // let's import like lazy loading 
const Instamart=lazy(()=>import("./Instamart"));
 
 export const Header=function (){
   
    const [isloggedout, Setisloggedout]=useState(true);
   const cartitems=useSelector((store)=>store.name.items);

    return (
        <div className="flex  items-center  space-x-2 ">

        <div className="flex space-x-2 items-center  shadow-sm">
        <Title/>
          <ul className="flex space-x-4">
            <Link to ="/">Home</Link>
            <Link to ="/About">About</Link>
           <Link to ="/contact">contact</Link>
           <Link to ="/Instamart">Instamart</Link>
            <li>Cart</li>
          
          </ul>
        </div>{
        (isloggedout)? <button className=" bg-green-400"
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