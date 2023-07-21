import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";
import { useState } from "react";

function filterdata(searchval, Reslist){
  const newdata=Reslist.filter((Res)=>{
   
    const stringname=Res.data.data.name;
  //  return  stringname.indexOf(searchval) !== -1
       return stringname===searchval
         
  })
  return newdata;
}


 

const Body=function (){
  
  
    // let searchval="kfc";
    // this is way of creating local state variable 
   let [searchval, setsearchval]=useState(""); 
   let [Reslist, setReslist]=useState(resList);
   
   
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
        return <Restaurentcard  {...restaurent.data.data} key={restaurent.data.data.id}/>
      })};
    
     
     
      </div>
      </>
    )
  }

  export default Body;