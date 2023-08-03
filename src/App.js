import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./constant";
import Title from "./Title";
import {Header} from "./Header";
import Restaurentcard from "./restaurant_card";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./Error";
import Contact from "./contact";
import Restaurantmenu from "./Restaurantmenu";
import { Suspense } from "react";
import Instamart from "./Instamart";
import Shimmer from "./shimmer";
import useOffline from "./utils/useoffline";
import usercontext from "./Usercontext";
import {provider} from 'react-redux';
import Store from "./utils/store";





const Applayout=function(){
  
  const [user, setUser]=useState({
    name:"sachin"
  })




  return (
    // we can use react.fragement inside another another react.fragement

   
    
    // <provider store={Store}>
    
  <usercontext.Provider value={user}>
    <Header/>
    <Outlet/>
    <Footer/>
    </usercontext.Provider>
    
    // </provider>
  )
};

const approuter=createBrowserRouter([
  {
    // path:"/",
    // anyhow we have to render header and footer so we will render <Applayout/> always 
    element:<Applayout/>, 
    errorElement:<Error/>,
    children:[
      {
        path:"/About",
        element:<About/>
      }, 
      {
        path:"/", 
        element:<Body/>
      }, 
      {
        path:"/contact",
        element:<Contact/>
      }, 
      {
        path:"/rest/:resId",
        element:<Restaurantmenu/>
      }, 
      {
        path:"/Instamart", 
        element:<Suspense  fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>
      }

    ]
  }

])

const root=ReactDOM.createRoot(document.getElementById("root"));
// to render the functional component
root.render(<RouterProvider router={approuter}/>);
