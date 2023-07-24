
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CDN_LINK from "./constant";
import Shimmer from "./shimmer";

const Restaurantmenu=()=>{
    const params=useParams();
    // console.log(params);
    const [restmenu, setrestmenu]=useState(null);

    useEffect(()=>{
        callmenuapi();
    }, [])
 async function callmenuapi(){
    const tempdata=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId="+params.resId)
     const json=await tempdata.json();
    console.log(json);
    setrestmenu(json?.data?.cards[0]?.card?.card?.info);

}


    return (!restmenu)?<Shimmer/>: (
        <div>
        <img  src={CDN_LINK+restmenu?.cloudinaryImageId}  />
        <h1>{params.resId}</h1>
        <h2>{restmenu.name}</h2>
        <h2>{restmenu.areaName}</h2>
        <h2>{restmenu.city}</h2>
        </div>
    )
}

export default Restaurantmenu;