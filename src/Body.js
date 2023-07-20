import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";
import { useState } from "react";
 


const Body=function (){
    // let searchval="kfc";
    const [searchval, setsearchval]=useState("");
    return (
        <>
        <div className="search-container">
           <input type="text" className="search-input" placeholder="search" 
           value={searchval} 
            onChange={(e)=>{
                setsearchval(e.target.value);
            }}
           />
           <button className="search-btn">search</button>
        </div>
      <div className="body-comp">
      {
      resList.map((restaurent)=>{
        return <Restaurentcard  {...restaurent.data.data} key={restaurent.data.data.id}/>
      })};
    
     
     
      </div>
      </>
    )
  }

  export default Body;