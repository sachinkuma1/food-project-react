import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";
import { useState , useEffect} from "react";
import {shimmer} from "./shimmer";

function filterdata(searchval, Reslist){
  const newdata = Reslist.filter((obj) => {
    const nameMatch = obj?.data?.name
      .toLowerCase()
      .includes(searchval.toLowerCase());
    const areaMatch = obj?.data?.area
      .toLowerCase()
      .includes(searchval.toLowerCase());
    return nameMatch || areaMatch;
  });

  return newdata;
}




 

const Body=function (){
  
  
    // let searchval="kfc";
    // this is way of creating local state variable 
   let [searchval, setsearchval]=useState(""); 
   let [Reslist, setReslist]=useState([]);

   useEffect(()=>{
    apicall();
   }, [])

   async function apicall(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&page_type=DESKTOP_WEB_LISTING");
    const jsondata= await data.json();
     setReslist(jsondata?.data?.cards[2]?.data?.data?.cards);
    console.log(jsondata);
}
   
   
   return (
        <>
     
        <div>
          <input type="text" className="search-container" placeholder="search"
          value={searchval}
          onChange={(e)=>{
            setsearchval(e.target.value);
          // searchval=e.target.value;  it won't work 
           }}
           />
          <button className="search-btn" 
          onClick={()=>{
            const Data=filterdata(searchval, Reslist);
            setReslist(Data);
          }
                   
          }
          
          >search
          </button>
        </div>
        
      <div className="body-comp">
      {
      Reslist.map((restaurent)=>{
        return <Restaurentcard  {...restaurent.data} />
      })};
    
     
     
      </div>
      </>
    )
  }

  export default Body;