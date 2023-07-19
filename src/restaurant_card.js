import { resList } from "./constant";
import CDN_LINK from "./constant";

const Restaurentcard=function({name,cloudinaryImageId, area }){

  // console.log(props.restr);
  // console.log(resList[0]);
  // console.log(props.restr==resList[0]);
  return (
    <div className="rest-card">
   <img src={CDN_LINK
   +cloudinaryImageId} alt="res-img"/> 
    <h3>{name }</h3>
    <h3 className="area">{  area}</h3>
   
    </div>
  )
};

export default Restaurentcard;