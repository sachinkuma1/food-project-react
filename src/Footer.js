import usercontext from "./Usercontext";
import { useContext } from "react";


const Footer=function (){

    const user=useContext(usercontext);
    return   <h3>Made with love by {user.name}</h3>
  
  }

  export default Footer;