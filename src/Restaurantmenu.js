
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CDN_LINK from "./constant";
import Shimmer from "./shimmer";
import userestaurantmenu from "./utils/userestaurantmenu";

const Restaurantmenu=()=>{
    const params=useParams();
    // console.log(params);
    const  restmenu=userestaurantmenu(params.resId);

   


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