import { resList } from "./constant";
import Restaurentcard from "./restaurant_card";

const Body=function (){
    return (
      <div className="body-comp">
      {
      resList.map((restaurent)=>{
        return <Restaurentcard  {...restaurent.data.data} key={restaurent.data.data.id}/>
      })};
    
     
     
      </div>
    )
  }

  export default Body;