import { useState , useEffect} from "react";
import { REST_API_LINK } from "../constant";

const userestaurantmenu=(resId)=>{
    const [restaurant, setrestaurant]=useState();


    useEffect(()=>{
        callmenuapi();
    }, [])
 async function callmenuapi(){
    const tempdata=await fetch(REST_API_LINK+resId)
     const json=await tempdata.json();
    console.log(json);
    setrestaurant(json?.data?.cards[0]?.card?.card?.info);

}

return restaurant;

}

export default userestaurantmenu;