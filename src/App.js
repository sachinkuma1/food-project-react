import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./constant";
import Title from "./Title";
import {Header} from "./Header";
import Restaurentcard from "./restaurant_card";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import { createBrowserRouter, RouterProvider} from "react-router-dom";




const Applayout=function(){
  return (
    // we can use react.fragement inside another another react.fragement
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  )
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>
  }, 
  {
    path:"/About", 
    element:<About/>
  }

])

const root=ReactDOM.createRoot(document.getElementById("root"));
// to render the functional component
root.render(<RouterProvider router={approuter}/>);
