import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";
import { useState , useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

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
  // let's make two restaurant list 
  let [allrestlist, setallrestlist]=useState([]);
  let [filteredrestlist, setfilteredrestlist]=useState([]);

   useEffect(()=>{
    apicall();
   }, [])

   async function apicall(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&page_type=DESKTOP_WEB_LISTING");
    const jsondata= await data.json();
     setallrestlist(jsondata?.data?.cards[2]?.data?.data?.cards);
     setfilteredrestlist(jsondata?.data?.cards[2]?.data?.data?.cards);
    console.log(jsondata);
}
   
   


  // not rendering early return 
  if(!allrestlist) return null;

   // shimmer ui will be shown if Reslist is empty
   // conditonal rendering (ternary )
   return (allrestlist.length===0)?<Shimmer/>:(
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
            const Data=filterdata(searchval, allrestlist);
            
            setfilteredrestlist(Data);
          }
                   
          }
          
          >search
          </button>
        </div>
        
      <div className="body-comp">
      { 
               
      filteredrestlist.map((restaurent)=>{
        {console.log(restaurent.data.id)}
        return (<Link  to={"/rest/"+restaurent.data.id}>
         <Restaurentcard  {...restaurent.data} />
        </Link>)
      })};
    
     
     
      </div>
      </>
    )
  }

  export default Body;