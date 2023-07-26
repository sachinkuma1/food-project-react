import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";
import { useState , useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOffline from "./utils/useoffline";

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



const offline=useOffline();
if(offline){
 return <h1>You are offline</h1>
}
   
  

  // not rendering early return 
  if(!allrestlist) return null;

   // shimmer ui will be shown if Reslist is empty
   // conditonal rendering (ternary )
   return (allrestlist.length===0)?<Shimmer/>:(
        <div className="bg-slate-50">
     
        <div >
          <input type="text" className="mt-9 mb-9  ml-11" placeholder="search"
          value={searchval}
          onChange={(e)=>{
            setsearchval(e.target.value);
          // searchval=e.target.value;  it won't work 
           }}
           />
          <button className="bg-lime-800" 
          onClick={()=>{
            const Data=filterdata(searchval, allrestlist);
            
            setfilteredrestlist(Data);
          }
                   
          }
          
          >search
          </button>
        </div>
        
      
      <div className="max-w-4xl  grid grid-cols-3 mx-[auto]  gap-x-4  gap-y-4 ">
      { 
               
      filteredrestlist.map((restaurent)=>{
        {console.log(restaurent.data.id)}
        return (<Link  to={"/rest/"+restaurent.data.id}>
         <Restaurentcard  {...restaurent.data} />
        </Link>)
      })};
    
     
     
      </div>
      
      </div>
    )
  }

  export default Body;