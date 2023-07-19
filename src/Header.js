 import Title from "./Title";
 
 export const Header=function (){
    // agar return wala line multiple line me chale jaye to usko () brcket ke under 
    // band kar do 
    return (
        <div className="header">
        <Title/>

        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        </div>
    )
}